import isEmail from "validator/lib/isEmail";
import { useContext } from "react";
import { FirebaseContext } from "..";
import { getDatabase, get, set, ref, child } from "firebase/database";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import bcryptjs from "bcryptjs";

const userRoles = {
  BRAND: "brand",
  CREATOR: "creator",
};

const collection = "users";

export function useFirebaseUsers() {
  const { db, auth } = useContext(FirebaseContext);

  async function signUpBrandEmail(
    fullName,
    brandName,
    email,
    password,
    foundUs
  ) {
    try {
      fullName = fullName.substr(0, 255);
      brandName = brandName.substr(0, 255);
      email = email.substr(0, 255);
      password = password.substr(0, 255);

      const errors = {}; // canSubmit
      if (fullName === "") errors.fullName = "Ce champ est obligatoire";
      if (brandName === "") errors.brandName = "Ce champ est obligatoire";
      if (email === "") errors.email = "Ce champ est obligatoire";
      else if (!isEmail(email)) errors.email = "Email invalide";
      if (password === "") errors.password = "Ce champ est obligatoire";
      if (password.length < 6)
        errors.password = "Le mot de passe doit contenir au moins 6 caractères";
      if (foundUs === "") errors.foundUs = "Ce champ est obligatoire";
      if (Object.keys(errors).length > 0) {
        return { success: false, errors };
      }

      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log({ res }, "back");

      bcryptjs.hash(password, 10, async function (err, hash) {
        if (err) throw err;
        await set(ref(db, collection + "/" + res.user.uid), {
          fullName,
          brandName,
          email,
          password: hash,
          foundUs,
          role: userRoles.BRAND,
        });
        return { success: true, errors };
      });
    } catch (error) {
      throw error;
    }
  }

  async function signInGoogleUser() {
    // Utilisateur se connecte et on récupère ses données
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken; // The signed-in user info
    const user = result.user;

    return { user, token };
  }

  async function signUpBrandGoogleStart() {
    // Vérifie BDD et si utilisateur existe, on connecte sans inscription
    try {
      const { user } = await signInGoogleUser();
      const dbRef = ref(getDatabase());
      const snapshot = await get(child(dbRef, `users/${user.uid}`));
      if (snapshot.exists()) {
        // console.log('userExist', snapshot.val());
        return null;
      } else {
        return user;
      }
    } catch (error) {
      throw error;
      // const errorCode = error.code
      // const errorMessage = error.message
      // // The email of the user's account used. // const email = error.customData.email
      // // The AuthCredential type that was used. // const credential = GoogleAuthProvider.credentialFromError(error)
    }
  }

  async function signUpBrandGoogleEnd(user, brandName, foundUs) {
    try {
      brandName = brandName.substr(0, 255);

      const errors = {}; // canSubmit
      if (brandName === "") errors.brandName = "Ce champ est obligatoire";
      if (foundUs === "") errors.foundUs = "Ce champ est obligatoire";
      if (Object.keys(errors).length > 0) {
        return { success: false, errors };
      }

      await set(ref(db, collection + "/" + user.uid), {
        fullName: user.displayName,
        brandName,
        email: user.email,
        foundUs,
        role: userRoles.BRAND,
      });
      return { success: true, errors };
    } catch (error) {
      throw error;
    }
  }

  async function signUpCreator(fullName, email, password, foundUs) {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log({ res }, "2");

      await set(ref(db, collection + "/" + res.user.uid), {
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

  // aync function signUpCreatorGoogle() {
  //   try {
  // console.log();
  //   } catch (error) {

  //   }
  // }

  return {
    signUpBrandEmail,
    signUpBrandGoogleStart,
    signUpBrandGoogleEnd,
    signUpCreator,
  };
}
