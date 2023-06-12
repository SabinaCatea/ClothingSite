import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase";

import SignUp from "../../Components/SignUp/SignUp";
import SignInForm from "../../Components/SignInForm/SignInForm";

import "./authentication.scss";

const Authentication = function () {
  useEffect(() => {
    async function fetchData() {
      const response = await getRedirectResult(auth);
    }
    fetchData();
    // console.log(response);
  }, []);

  return (
    <div className="authentication-container">
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign is with Google Redirect
      </button> */}
      <SignInForm />
      <SignUp />
    </div>
  );
};

export default Authentication;
