import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from './../../firebase.init';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate=useNavigate()

  const [createUserWithEmailAndPassword,user,hookError] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  if (user) {
  navigate('/shop')
}

  const handelCreateUser = (event) => {
      event.preventDefault();
      if (password !== confirmPassword) {
          setError("Your Two Passwords Didn't Match")
          return;
    }
    if (password.length < 6) {
      setError("Password Must Be Contain More Than Six(6) Character")
      return
    }
    createUserWithEmailAndPassword(email,password)
  };

  return (
    <div>
      <div className="form-container">
        <div>
          <h2 className="form-title">Sign Up</h2>
          <form onSubmit={handelCreateUser}>
            <div className="input-group">
              <label htmlFor="email">Email :</label>
              <input
                onBlur={handleEmailBlur}
                type="email"
                name="email"
                id=""
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password :</label>
              <input
                onBlur={handlePasswordBlur}
                type="password"
                name="password"
                id=""
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password :</label>
              <input
                onBlur={handleConfirmPasswordBlur}
                type="password"
                name="confirm-password"
                id=""
                required
              />
                      </div>
                      <h4 style={{color:'red'}}>{error}</h4>
                      <h4 style={{color:'red'}}>{hookError}</h4>
            <input className="form-submit" type="submit" value="Sign Up" />
          </form>
          <h5>
            Already Have an Account ?{" "}
            <Link className="form-link" to="/login">
              Login Here
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
