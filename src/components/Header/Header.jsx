import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { FcCollaboration} from 'react-icons/fc';

const Header = () => {
  return (
    <div className='Header'>
    <header className="mak-navbar w-100">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <Link to="/" className="mak-brand text-decoration-none"><FcCollaboration /> INTRANET</Link>
            </div>
            <div className="col-sm-8">
              <nav className="mak-nav">
                <ul className="list-unstyled d-flex">
                <li><Link to="/">Accueil</Link></li>
                  <li><Link to="/Login">Se connecter</Link></li>
                  <li><Link to="/Collablist">Liste collaborateur</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;