import { useFirebaseUsers } from "..";
import { getDatabase, get, ref, child } from "firebase/database";

export function useSignInGoogle() {
  const { signInGoogleUser } = useFirebaseUsers();

  return async function () {
    try {
      const { user } = await signInGoogleUser();
      const dbRef = ref(getDatabase());
      const snapshot = await get(child(dbRef, `users/${user.uid}`));
      return { success: snapshot.exists() };
    } catch (error) {
      throw error;
    }
  };
}
