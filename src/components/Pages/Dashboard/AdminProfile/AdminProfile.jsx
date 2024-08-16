import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useRole from '../../../hooks/useRole';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
// import useAuth from '../../../hooks/useAuth';
// import useRole from '../../../hooks/useRole';

const AdminProfile = () => {
  const { user, loading } = useAuth();
  // console.log(user)

  const axiosPublic = useAxiosPublic()
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosPublic.get('/users')
      return res.data
    }

  })

  const member = users?.filter(user => user?.role == 'member')

  const { data: apartments = [], } = useQuery({
    queryKey: ['apartments'],
    queryFn: async () => {
      const res = await axiosPublic.get('/apartments')
      return res.data
    }

  })
  const { data: agreements = [], } = useQuery({
    queryKey: ['agreements'],
    queryFn: async () => {
      const res = await axiosPublic.get('/agreements')
      return res.data
    }

  })

  const [role] = useRole()
  const { name, image, email, _id, role: userRole } = role

  // console.log(role)

  return (
    <div>


      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={image} />
              
            </div>
          </div>

        </figure>
        <div className="card-body items-center text-center">
          <h4 className="card-title  bg-purple-400 px-6 py-2 rounded-full ">{userRole} </h4>
          <h2 className="card-title">{name} </h2>
          <h2 className="card-title">{email} </h2>

        </div>
      </div>

      <div className="stats shadow">

        <div className="stat">

          <div className="stat-title">Users</div>
          <div className="stat-value">{users?.length} </div>
          <div className="stat-desc"></div>

        </div>
        <div className="stat">

          <div className="stat-title">apartments</div>
          <div className="stat-value">{apartments?.length} </div>
          <div className="stat-desc"></div>

        </div>
        <div className="stat">

          <div className="stat-title">agreements</div>
          <div className="stat-value">{agreements?.length} </div>
          <div className="stat-desc"></div>

        </div>
        <div className="stat">

          <div className="stat-title">available room</div>
          <div className="stat-value"> {apartments?.length - agreements?.length} </div>
          <div className="stat-desc"></div>

        </div>


        <div className="stat">

          <div className="stat-title"> members </div>
          <div className="stat-value">{member?.length} </div>
          <div className="stat-desc"></div>

        </div>

      </div>

    </div>
  );
};

export default AdminProfile;