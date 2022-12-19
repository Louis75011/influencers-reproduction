import { useContext } from "react";
import { FirebaseContext } from "../..";
import { usersCollection, userRoles, useFirebaseUsers } from "..";
import { getDatabase, get, set, ref, child } from "firebase/database";

function validateFields(userName) {
  const errors = {}; // canSubmit
  if (userName === "") errors.userName = "Ce champ est obligatoire";

  return { success: Object.keys(errors).length === 0, errors };
}

export function useSignUpCreatorGoogle() {
  const { db } = useContext(FirebaseContext);
  const { signInGoogleUser } = useFirebaseUsers();

  return async function signUpCreatorGoogle(userName) {
    try {
      const { user } = await signInGoogleUser();
      const dbRef = ref(getDatabase());
      const snapshot = await get(child(dbRef, `users/${user.uid}`));
      if (snapshot.exists()) throw new Error("Email already exist");

      userName = userName.substr(0, 255);
      const { success, errors } = validateFields(userName);
      if (!success) return { success, errors };

      await set(ref(db, usersCollection + "/" + user.uid), {
        userName,
        fullName: user.displayName,
        email: user.email,
        role: userRoles.CREATOR,
      });

      return { success: true, errors };
    } catch (error) {
      throw error;
    }
  };
}
