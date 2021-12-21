import userEvent from '@testing-library/user-event';
import React from 'react';
import {
    //  Route, 
    //  Redirect,
     Navigate,
      useLocation
     } from 'react-router-dom';

import useFirebase from '../../hooks/useFirebase';
import useAuth from '../../hooks/useAuth'

const PrivateRoute = ({ children, ...rest }) => {
    const {user} = useAuth()
    // const email= sessionStorage.getItem("email");
    let location = useLocation();
    if(user.email){
        return children;
    }
    
    return <Navigate to="/login" state={{ from: location }} />;
    // return (
    //     <Route
    //         {...rest}
    //         render={({ location }) => email ? children : <Redirect
    //             to={{
    //                 pathname: "/login",
    //                 state: { from: location }
    //             }}
    //         ></Redirect>}
    //     >

    //     </Route>
    // );
};

export default PrivateRoute;