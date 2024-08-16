import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAuth from '../../../hooks/useAuth';
import useRole from '../../../hooks/useRole';
import toast from 'react-hot-toast';

const ManageMembers = () => {



    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()

    // const [role  ]= useRole( )
    const users = useLoaderData()
// const manageUsers  =
  
    const handleUser = (id) => {
        console.log(id)
      
        const role = { role: "user" }
        axiosPublic.patch(`/user/update/${id}`, role)
            .then(res => {
                console.log(res.data)
                // navigate(location.state ? location.state : '/')

            })


            .catch((err) => console.log(err, 'cccc'))



    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}


                        {
                            users?.map((user, ix) =>
                                <tr>
                                    <th> {ix + 1} </th>
                                    <td>{user?.name} </td>
                                    <td>{user?.email} </td>
                                    <td><button onClick={() => handleUser(user?._id)} className='btn  bg-red-300' >remove </button> </td>

                                </tr>

                            )
                        }

                        {/* row 3 */}

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageMembers;