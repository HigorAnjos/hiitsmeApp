import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/new">Adicionar</Link></li>
          </ul>
          <div id="logo">
            <Link to="/">Hi its me</Link>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;