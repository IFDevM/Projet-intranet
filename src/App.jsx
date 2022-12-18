import { useSelector } from 'react-redux'
import { removeToken } from './services/storages';
import { useState } from 'react'
import { Link, NavLink, useNavigate, Outlet } from 'react-router-dom'
import './App.css'
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaListUl } from 'react-icons/fa';
import { MdPersonAddAlt1 } from 'react-icons/md';
import { BiUserCircle, } from 'react-icons/bi';

function App() {

  const navigate = useNavigate()
  const [user, setUser] = useState({})
  const selectedUser = useSelector(state => state.authentication.authObj)

  useEffect(() => {
    console.log(selectedUser);
    if (selectedUser) {
      setUser(selectedUser.user)
    } else {
      navigate("/login")
    }
    console.log(user)
  }, [])

  const handleClick = () => {
    //retirer le token du localstorage
    removeToken()
    //redirection vers le login
    window.location.href = "/"
  }

  
  return (
    <>
      <header className="mak-navbar w-100">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <Link to={"/Dites-bonjour"} className="mak-brand text-decoration-none">intranet</Link>
            </div>
            <div className="col-8 d-flex justify-content-end align-items-center">
              <nav className={`me-5 mak-nav`}>
                <ul className="list-unstyled d-flex">
                  <li><NavLink to={"/collab"}><span><FaListUl />  </span>Listes Collaborateurs</NavLink></li>
                  {user.isAdmin && <li><NavLink to={"/newcollab"}><span><MdPersonAddAlt1 /></span>Ajouter</NavLink></li>}
                  <li><NavLink to={"/update-profil/"}><span><BiUserCircle  />  </span>Mon profil</NavLink></li>
                  <button onClick={handleClick}><span></span>Déconnexion</button>
                </ul>
              </nav>              
            </div>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className=" text-center">
          <p className="copyright">
   DM2-1 <span>Projet Intranet</span> 2022 @copyright  Fanna Ibrahim 
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
