// import { db } from './index'
import { useContext } from "react";
import { FirebaseContext } from ".";
import { set, ref } from "firebase/database";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const userRoles = {
  BRAND: "brand",
  CREATOR: "creator",
};

const collection = "users";

export function useFirebaseUsers() {
  const { db, auth } = useContext(FirebaseContext);

  async function signUpBrand(fullName, brandName, email, password) {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log({ res }, "1");

      await set(ref(db, collection + "/" + res.user.uid), {
        fullName,
        brandName,
        email,
        password,
        role: userRoles.BRAND,
      });
    } catch (error) {
      throw error;
    }
  }

  async function signUpCreator(fullName, email, password) {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log({ res }, "2");

      await set(ref(db, collection + "/" + res.user.uid), {
        fullName,
        email,
        password,
        role: userRoles.CREATOR,
      });
    } catch (error) {
      throw error;
    }
  }

  return { signUpBrand, signUpCreator };
}
