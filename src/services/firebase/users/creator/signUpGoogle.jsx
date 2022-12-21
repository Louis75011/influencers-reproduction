import { useContext } from "react";
import { FirebaseContext } from "../..";
import { usersCollection, userRoles, useFirebaseUsers } from "..";
import { getDatabase, get, set, ref, child } from "firebase/database";

function validateFields(creatorName) {
  const errors = {}; // canSubmit
  if (creatorName === "") errors.creatorName = "Field required";

  return { success: Object.keys(errors).length === 0, errors };
}

export function useSignUpCreatorGoogle() {
  const { db } = useContext(FirebaseContext);
  const { signInGoogleUser } = useFirebaseUsers();

  return async function signUpCreatorGoogle(creatorName) {
    try {
      const { user } = await signInGoogleUser();
      const dbRef = ref(getDatabase());
      const snapshot = await get(child(dbRef, `users/${user.uid}`));
      if (snapshot.exists()) throw new Error("Email already exist");

      creatorName = creatorName.substr(0, 255);
      const { success, errors } = validateFields(creatorName);
      if (!success) return { success, errors };

      await set(ref(db, usersCollection + "/" + user.uid), {
        creatorName,
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
