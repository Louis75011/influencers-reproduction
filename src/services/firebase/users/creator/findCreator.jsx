import { child, getDatabase, ref } from "firebase/database";
import { get } from "http";

export default function useCreator() {
  const { db } = useContext(FirebaseContext);

  async function getCreator(userName) {
    try {
      // const dbRef = ref(getDatabase());
      // const { user } = await signInGoogleUser();
      // const snapshot = await get(child(dbRef, `users/${user.uid}`));
      // TODO : Trouver comment faire get sur firebase
    } catch (error) {
      throw error;
    }
  }

  return { getCreator };
}
//       if (snapshot.exists()) throw new Error('Email already exist')
//       userName = userName.substr(0, 255);
//       const { success, errors } = validateFields(userName);
//       if (!success) return { success, errors };
//       await set(ref(db, usersCollection + "/" + user.uid), {
//         userName,
//         fullName: user.displayName,
//         email: user.email,
//         role: userRoles.CREATOR,
//       });
//       return { success: true, errors };
//     } catch (error) {
//       throw error;
//     }
//   }
