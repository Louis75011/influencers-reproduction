export default function errorHandler(err) {
  switch (err.code) {
    case "auth/email-already-in-use":
      return "Email is already registered";
    case "auth/weak-password":
      return "Password should be at least 6 characters";
    default:
      return null;
  }
}
