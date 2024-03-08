import {
  auth,
  createUserDocFromAuth,
  signInWithGoogleRedirect,
} from "../Firebase/firebase.utils.js";
import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";

function SignIn() {
  useEffect(() => {
    const getResponse = async () => {
      const response = await getRedirectResult(auth);

      if (response) {
        const userDocRef = await createUserDocFromAuth(response.user);
      }
    };
    getResponse();
  }, []);

  return (
    <>
      <div id="SignInForm">
        <h2>Sign-In</h2>
        <button onClick={signInWithGoogleRedirect}>Sign in with Google</button>
      </div>
    </>
  );
}

export default SignIn;
