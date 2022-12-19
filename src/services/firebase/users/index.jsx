// import isEmail from "validator/lib/isEmail";
import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "..";
import { set, ref } from "firebase/database";
import {
  createUserWithEmailAndPassword,
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
  const { db, auth } = useContext(FirebaseContext);
  const navigate = useNavigate();

  async function signInGoogleUser() {
    console.log("IN");
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

  async function signUpCreator(fullName, email, password, foundUs) {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log({ res }, "2");

      await set(ref(db, usersCollection + "/" + res.user.uid), {
        fullName,
        email,
        password,
        foundUs,
        role: userRoles.CREATOR,
      });
    } catch (error) {
      throw error;
    }
  }

  return {
    // signUpCreator,
    signInGoogleUser,
    signOut,
  };
}
