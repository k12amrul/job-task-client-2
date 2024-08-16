

import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
const { user ,loading  } = useAuth()
console.log( loading, user ,)
 
const axiosSecure = useAxiosSecure()

const { data : role}=  useQuery({
    queryKey: ['role', ],
    enabled: !loading,
    queryFn: async () => {
      const {data} = await axiosSecure(`/user/${user?.email}` )
      return data.role 
    },
  })




    return [role  ]
};

export default useAdmin;