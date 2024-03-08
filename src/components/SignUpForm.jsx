import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../Firebase/firebase.utils";

const defaultFormInputs = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUpForm() {
  const [formInputs, setFormInputs] = useState(defaultFormInputs);
  const { userName, email, password, confirmPassword } = formInputs;

  const resetFormInputs = () => {
    setFormInputs(defaultFormInputs);
  };

  //   Handles sign up form submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password != confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocFromAuth(user, { userName });
      resetFormInputs();
      // } catch (error) {
      //   console.log("error creating user", error);
      // }
    } catch (error) {
      if (error.code == "auth/email-already-in-use") {
        alert("This email is already registered.");
      } else {
        console.log("error creating user", error.message);
      }
    }
  };

  //   Handles inputs in sign up form
  const handleInputs = (event) => {
    const { name, value } = event.target;

    setFormInputs({ ...formInputs, [name]: value });
  };

  return (
    <>
      <div id="sign-up-form-container">
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            required
            onChange={handleInputs}
            name="userName"
            value={userName}
          ></input>

          <label>Email</label>
          <input
            type="email"
            required
            onChange={handleInputs}
            name="email"
            value={email}
          ></input>

          <label>Password</label>
          <input
            type="password"
            required
            onChange={handleInputs}
            name="password"
            value={password}
          ></input>

          <label>Confirm Password</label>
          <input
            type="password"
            required
            onChange={handleInputs}
            name="confirmPassword"
            value={confirmPassword}
          ></input>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
}

export default SignUpForm;
