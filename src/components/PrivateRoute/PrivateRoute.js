
import React from 'react';
import {
     Navigate,
      useLocation
     } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth'
import useFirebase from '../../hooks/useFirebase';


const PrivateRoute = ({ children, ...rest }) => {
    // const { user, isLoading } = useAuth();
    const { user, isLoading } = useFirebase();

    console.log(user);
    const location = useLocation();
    if (isLoading) { return <h1>loading...</h1> }
    if (user.email) {
        return children;
    }
    return (
        <Navigate to={{ pathname: '/login', state: { from: location } }}></Navigate>
    )
};
export default PrivateRoute;