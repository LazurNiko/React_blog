import React from 'react';
import { useUser } from '../hooks/useUser';
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from 'firebase/auth';

export const NavBar = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
  <nav className='nav'>
    <ul className='nav-list'>
      <li>
        <Link  className='nav-item' to="/">Home</Link>
      </li>
      <li>
        <Link className='nav-item' to="/about">About</Link>
      </li>
      <li>
        <Link className='nav-item' to="/articles">Articles</Link>
      </li>
    </ul>
    <div className='nav-right'>
      {user
        ? <button onClick={() => {
          signOut(getAuth());
        }}>Log out</button>
      : <button onClick={() => {
        navigate('/login')
      }}>Log in</button>}
    </div>
  </nav>
)};
