import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <nav>
        <div>
          <Link to="/">Hi its me</Link>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/new">Adicionar</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;