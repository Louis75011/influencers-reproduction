import { useContext } from "react";
import { usersCollection, userRoles } from "..";
import { FirebaseContext } from "../..";
import { set, ref } from "firebase/database";
import { createUserWithEmailAndPassword } from "firebase/auth";
import isEmail from "validator/lib/isEmail";
import bcryptjs from "bcryptjs";

// function validateFields(fullName, brandName, email, password, foundUs) {
//   const errors = {}; // canSubmit
//   if (fullName === "") errors.fullName = "Ce champ est obligatoire";
//   if (brandName === "") errors.brandName = "Ce champ est obligatoire";
//   if (email === "") errors.email = "Ce champ est obligatoire";
//   else if (!isEmail(email)) errors.email = "Email invalide";
//   if (password === "") errors.password = "Ce champ est obligatoire";
//   if (password.length < 6)
//     errors.password = "Le mot de passe doit contenir au moins 6 caractères";
//   if (foundUs === "") errors.foundUs = "Ce champ est obligatoire";

//   return { success: Object.keys(errors).length === 0, errors };
// }

// export function useSignUpCreatorEmail() {
//   const { db, auth } = useContext(FirebaseContext);

//   return async function (fullName, email, password, foundUs) {
//     try {
//       fullName = fullName.substr(0, 255);
//       email = email.substr(0, 255);
//       password = password.substr(0, 255);

//       const { success, errors } = validateFields(
//         fullName,
//         email,
//         password,
//         foundUs
//       );
//       if (!success) return { success, errors };

//       const res = await createUserWithEmailAndPassword(auth, email, password);
//       console.log({ res }, "back");

//       bcryptjs.hash(password, 10, async function (err, hash) {
//         if (err) throw err;
//         await set(ref(db, usersCollection + "/" + res.user.uid), {
//           fullName,
//           brandName,
//           email,
//           password: hash,
//           foundUs,
//           role: userRoles.BRAND,
//         });
//         return { success: true, errors };
//       });
//     } catch (error) {
//       throw error;
//     }
//   };
// }
