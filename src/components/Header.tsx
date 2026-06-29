import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header(): JSX.Element {
  return (
    <header className="header">
      <nav className="header-nav">
        <Link to="/cocohisho" className="header-logo">
          <img src="assets/images/logo.png" alt="避暑地" style={{ width: '40px', height: '40px', marginRight: '10px', marginBottom: '6px', verticalAlign: 'middle' }} />
          避暑地
        </Link>
        <ul className="header-menu">
          <li>
            <Link to="/cocohisho">トップページ</Link>
          </li>
          <li>
            <Link to="/terms">利用規約</Link>
          </li>
          <li>
            <Link to="/about">関係者</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
