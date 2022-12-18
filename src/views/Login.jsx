import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userAuthenticate } from '../features/AuthentificationSlice'
import './login.css'
import { FaHandshake } from 'react-icons/fa';
import { FaSignInAlt} from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Login = () => {
    const connectedUser = useSelector(state => state.authentication.authObj)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [ids, setIds] = useState({
        email: "",
        password: ""
    })


    const onHanbleSubmit = (event) => {
        event.preventDefault()
        console.log(ids.email, ids.password)
        dispatch(userAuthenticate(ids)).unwrap().then(() => {
            navigate('/Dites-bonjour')
        })
    }


    const onHandleChange = (event) => {
        const { name, value } = event.target
        const temp = { ...ids }
        temp[name] = value
        console.log(temp);
        setIds(temp)
    }

    useEffect(() => {
        if (connectedUser) {
            navigate("/Dites-bonjour")
        }
    }, [])

    return (
        <>
            <div className='Header'>
                <header className="mak-navbar w-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <Link to="/" className="mak-brand text-decoration-none"><FaHandshake /> INTRANET</Link>
                            </div>
                            <div className="col-sm-8">
                                <nav className="mak-nav">
                                    <ul className="list-unstyled d-flex">
                                        <li><Link to="/Login"><FaSignInAlt/> Se connecter</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
            <div className="registration">
                <div className="registrationformulaireCtnr">
                    <h1 className="connexion">Connexion</h1>
                    <p>Pour vous connecter à l'intranet, entrez votre identifiant et mot de passe</p>
                    <form onSubmit={onHanbleSubmit} >
                        <div className="mt-4 text-center">
                        <label>Email:</label>
                            <input type="email" name="email" id="email" onChange={onHandleChange} placeholder="ex:owen.lopez@example.com" />
                        </div>
                        <div className="mt-2 text-center">
                        <label>Mot de passe: </label>
                            <input type="password" name="password" id="password" onChange={onHandleChange} placeholder="mot de passe" />
                        </div>
                        <div className="mt-4 text-center">
                            <input className="btnConnect" type="submit" value="CONNEXION"  />
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}

export default Login

