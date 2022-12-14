import { useRef } from "react";
import { useFirebaseUsers } from "../../services/firebase/users";
import errorHandler from "../../services/firebase/error";
import Footer from "../layout/Footer";
import "../../styles/views/Join.css";

export default function SignUpCreator() {
  const { signUpCreator } = useFirebaseUsers();
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      console.log(fullNameRef.current.value);
      await signUpCreator(
        fullNameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value
      );
    } catch (error) {
      const msg = errorHandler(error);
      if (msg) {
        alert(msg);
      } else {
        console.log(error);
      }
    }
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="fullname">Fullname :</label>
        <input type="text" id="fullname" ref={fullNameRef} />
        <label htmlFor="fullname">Email :</label>
        <input type="email" id="email" ref={emailRef} />
        <label htmlFor="fullname">Password :</label>
        <input type="password" id="password" ref={passwordRef} />
        <button>Sign up</button>
      </form>
      <Footer />
    </div>
  );
}
