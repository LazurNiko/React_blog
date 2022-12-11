import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const CreateAccountPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const createAccount = async() => {
    try {
      if(password !== confirmPassword){
        setError('Password and confirm password do not much');
        return;
      }

      await createUserWithEmailAndPassword(getAuth(), email, password);
      navigate('/articles');
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <section className="logIn-page">
      <h1 className="page_title">Create Account</h1>
      { error && <p className="error">{error}</p> }
      <div className="login-input" >
      <input
        placeholder="Your email address"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      /><input
      type="password"
      placeholder="Confirm password"
      value={confirmPassword}
      onChange={e => setConfirmPassword(e.target.value)}
    />
      <button onClick={createAccount}>Create Account</button>
      <Link to="/login" style={{textDecoration: "none"}}>Already have an account? Log in here</Link>
      </div>
    </section>
  );
}
