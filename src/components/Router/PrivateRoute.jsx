import React, { useContext  } from 'react';

import { Navigate ,useLocation } from 'react-router-dom';
import { AuthContext } from '../cotexts/AuthProvider';

const PrivateRoute = ({children} ) => {
const location = useLocation()
// console.log(location.pathname)
    const {  user, loading, setloading } =useContext(AuthContext )

if( loading ){
    return  <div className="   animate-spin  radial-progress" style={{"--value":70}} role="progressbar"></div>
    // flex justify-center items-center
    // <span className="loading loading-spinner loading-lg"></span>
}

if ( user ){
    return children
    // setloading(false)
}


      return  <Navigate state={location.pathname} to='/login' > </Navigate>

};

export default PrivateRoute;