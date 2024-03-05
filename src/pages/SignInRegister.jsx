import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../firebase/firebase.utils";

function SignInRegister() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocFromAuth(user);
  };

  return (
    <>
      <div id="FormsContainer">
        <div id="SignInForm">
          <h2>Sign-In</h2>
          <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        </div>
        <div id="RegisterForm">
          <h2>New here? - Sign-Up</h2>
          <button onClick={logGoogleUser}>Sign up with Google Popup</button>
        </div>
      </div>
    </>
  );
}

export default SignInRegister;
