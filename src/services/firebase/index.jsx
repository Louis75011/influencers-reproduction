// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createContext } from "react";
import {
  getAuth,
  // GoogleAuthProvider,
  // signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";
// ​​  signInWithPopup,  // ​​  createUserWithEmailAndPassword,  // ​sendPasswordResetEmail,  // ​​  signOut,

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0DeouLubumb4o8hW-cGxaaJ5lAPmXijg",
  authDomain: "collabstr-clone.firebaseapp.com",
  projectId: "collabstr-clone",
  storageBucket: "collabstr-clone.appspot.com",
  messagingSenderId: "359354853490",
  appId: "1:359354853490:web:dc6b4d769e5a1fab233aeb",
  measurementId: "G-Z95DSRY9NW",
  // The value of `databaseURL` depends on the location of the database
  databaseURL:
    "https://collabstr-clone-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export const FirebaseContext = createContext(null);

export default function FirebaseProvider({ children }) {
  return (
    <FirebaseContext.Provider value={{ auth, db }}>
      {children}
    </FirebaseContext.Provider>
  );
}
