// import { useContext } from "react";
// import { FirebaseContext } from "../..";
// import { usersCollection, userRoles, useFirebaseUsers } from "..";
// import { getDatabase, get, set, ref, child } from "firebase/database";

// function validateFields(foundUs) {
//   const errors = {}; // canSubmit
//   if (foundUs === "") errors.foundUs = "Ce champ est obligatoire";

//   return { success: Object.keys(errors).length === 0, errors };
// }

// export function useSignUpCreatorGoogle() {
//   const { db } = useContext(FirebaseContext);
//   const { signInGoogleUser } = useFirebaseUsers();

//   async function signUpCreatorGoogleStart() {
//     // Vérifie BDD et si utilisateur existe, on connecte sans inscription
//     try {
//       const { user } = await signInGoogleUser();
//       const dbRef = ref(getDatabase());
//       const snapshot = await get(child(dbRef, `users/${user.uid}`));
//       if (snapshot.exists()) {
//         // console.log('userExist', snapshot.val());
//         return null;
//       } else {
//         return user;
//       }
//     } catch (error) {
//       throw error;
//     }
//   }

//   async function signUpCreatorGoogleEnd(user, brandName, foundUs) {
//     try {
//       brandName = brandName.substr(0, 255);

//       const { success, errors } = validateFields(brandName, foundUs);
//       if (!success) return { success, errors };

//       await set(ref(db, usersCollection + "/" + user.uid), {
//         fullName: user.displayName,
//         brandName,
//         email: user.email,
//         foundUs,
//         role: userRoles.BRAND,
//       });
//       return { success: true, errors };
//     } catch (error) {
//       throw error;
//     }
//   }

//   return { signUpCreatorGoogleStart, signUpCreatorGoogleEnd };
// }
