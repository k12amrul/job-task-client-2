import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Loadannouncement = () => {
    const data =useLoaderData( )

    console.log( data)

    return (
        <div>
           {
            data?.map( d  => <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-red-400">{ d?.title} </h2>
              <p className=' text-purple-400'>{ d?.des} </p>
              
            </div>
          </div>

            )
           }
        </div>
    );
};

export default Loadannouncement;