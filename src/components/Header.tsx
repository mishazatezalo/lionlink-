import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/chat">Chat</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

