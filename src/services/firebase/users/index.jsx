import { useContext } from "react";
import { FirebaseContext } from "..";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const userRoles = {
  BRAND: "brand",
  CREATOR: "creator",
};

export const usersCollection = "users";

export function useFirebaseUsers() {
  const { auth } = useContext(FirebaseContext);
  const navigate = useNavigate();

  async function signInGoogleUser() {
    // Utilisateur se connecte et on récupère ses données
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken; // The signed-in user info
    const user = result.user;

    return { user, token };
  }

  async function signOut() {
    try {
      await auth.signOut();
      navigate("/login");
    } catch (error) {
      throw error;
    }
  }

  return {
    signInGoogleUser,
    signOut,
  };
}
