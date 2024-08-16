import React from 'react';

const MyProfile = ({ name , image , email  }) => {
    return (
        <div>
            <div> <img src={image} alt="" /></div>
            <h1>  {name} </h1>
            <h1>  {email } </h1>
            <h1>  </h1>
            <h1>   </h1>
        </div>
    );
};

export default MyProfile;