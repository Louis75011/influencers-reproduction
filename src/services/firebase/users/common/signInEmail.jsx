import { getDatabase, get, ref, child } from "firebase/database";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import { FirebaseContext } from "../..";
import isEmail from "validator/lib/isEmail";

function validateFields(email, password) {
  const errors = {}; // canSubmit
  if (email === "") errors.email = "Ce champ est obligatoire";
  else if (!isEmail(email)) errors.email = "Email invalide";
  if (password === "") errors.password = "Ce champ est obligatoire";
  if (password.length < 6)
    errors.password = "Le mot de passe doit contenir au moins 6 caractères";

  return { success: Object.keys(errors).length === 0, errors };
}

export function useSignInEmail() {
  const { auth } = useContext(FirebaseContext);

  return async function (email, password) {
    try {
      email = email.substr(0, 255);
      password = password.substr(0, 255);

      const { success, errors } = validateFields(email, password);
      if (!success) return { success, errors };

      const { user } = await signInWithEmailAndPassword(auth, email, password); // get user
      const dbRef = ref(getDatabase()); // if exist in database
      const snapshot = await get(child(dbRef, `users/${user.uid}`)); // connect user with is 'name'
      if (snapshot.exists()) {
        return { success: true, message: "You're connected" };
      } else {
        return { success: false, message: "Account doesn't exist" };
      }
    } catch (error) {
      throw error;
    }
  };
}
