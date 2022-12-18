import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

function Error () {
    return (
        <div className='error-message'>

            <h1>Error 404 !</h1>
            <Link to='/login'><button className='btn-connect-error'> Se connecter</button></Link>
            
            
        </div>
    );
};

export default Error;