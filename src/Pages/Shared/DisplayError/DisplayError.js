import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const DisplayError = () => {
    const error = useRouteError();
    const {logOut} = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
        .then(() => { })
        .catch(err => console.log(err));
    }
    return (
        <div>
            <p className="text-red-500">Something Went Wrong.</p>
            <p className="text-red-400">{error.statusText || error.message}</p>
            <h4 className="text-3xl">Please <button onClick={handleSignOut}>Signout</button> and log back in </h4>
        </div>
    );
};

export default DisplayError;