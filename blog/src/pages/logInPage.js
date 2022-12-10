import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const login = async () => {
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      navigate('/articles')
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
      />
      <button onClick={login}>Log In</button>
      <Link to="/create-account" style={{textDecoration: "none"}}>Don't have an account? Create one here</Link>
      </div>
    </section>
  );
}