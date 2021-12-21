import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

import useFirebase from '../../hooks/useFirebase'
const Navbar = () => {
    const { user, handleLogout } = useFirebase()
    
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light py-5">
                <div className="container">
                    <div className="d-flex">
                   
                        <h1 className="navbar-brand site_name">BRAIDO</h1>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">

                            <Link to="/" className="nav-link fw-bold">Home</Link>

                            <Link to="/aboutUs" className="nav-link fw-bold">About</Link>

                          

                            {/* <Link to="/dashboard" className="nav-link fw-bold">Dashbaord</Link> */}

                                  <h6 className="mt-2 mx-3"> {user.email} </h6>
                                 
                            { user.email?
                                <Link to="/login">
                              
                                <button onClick={handleLogout} 
                                
                                className="btn btn-warning me-2" >Log-out</button>
                                </Link> 
                               


                                :
                                <Link to="/login">
                                <button className="btn btn-warning me-2" >Log In</button>
                                </Link>
                                
                            }
                            

                            <Link to="/myBooking" className="nav-link fw-bold ms-5"><i className="fas fa-cart-plus"></i></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;