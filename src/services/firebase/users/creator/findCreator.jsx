import {
  getDatabase,
  ref,
  child,
  query,
  onValue,
  equalTo,
  orderByChild,
} from "firebase/database";

export default function useCreator() {
  async function getCreator(creatorName) {
    try {
      const dbRef = ref(getDatabase());
      const usersRef = child(dbRef, "users");
      // retrouver un influenceur existant
      return new Promise((resolve) => {
        onValue(
          query(usersRef, orderByChild("creatorName"), equalTo(creatorName)),
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
