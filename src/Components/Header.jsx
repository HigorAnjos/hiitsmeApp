import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper teal">
          <Link to="/" className="brand-logo right">Hi its me</Link>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/new">Adicionar</Link></li>
            <li><Link to="/createcategory">Nova Categoria</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;