import SignIn from "../components/SignIn";
import SignUpForm from "../components/SignUpForm";

function SignInRegister() {
  return (
    <>
      <div id="FormsContainer">
        <SignIn></SignIn>
        <SignUpForm></SignUpForm>
      </div>
    </>
  );
}

export default SignInRegister;
