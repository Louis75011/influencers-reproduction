import {
  getDatabase,
  ref,
  get,
  child,
  query,
  onValue,
  equalTo,
  orderByChild,
  limitToLast,
} from "firebase/database";
import { useContext } from "react";
import { FirebaseContext } from "../..";

export default function useCreator() {
  const { db } = useContext(FirebaseContext);

  async function getCreator(userName) {
    try {
      const dbRef = ref(getDatabase());
      const usersRef = child(dbRef, "users");
      // retrouver un influenceur existant
      return new Promise((resolve) => {
        onValue(
          query(usersRef, orderByChild("userName"), equalTo(userName)),
          (snapshot) => {
            resolve(snapshot.val());
          }
        );
      });
    } catch (error) {
      throw error;
    }
  }

  return { getCreator };
}
