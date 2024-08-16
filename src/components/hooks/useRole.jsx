import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";
import { useContext, useEffect } from "react";
import { AuthContext } from "../cotexts/AuthProvider";


const useRole = () => {

    // useRole hook kaj korena 
    const { user, loading } = useContext(AuthContext)
    // const { user, loading } = useAuth();
    // console.log(user)
    const axiosPublic = useAxiosPublic();


    const { data: role, isPending } = useQuery({
        queryKey: ['role'], //user?.email,
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/user/${user?.email}`);
            // console.log(res.data);
            return data;
        }
    })
    // console.log(role)
    return [role, isPending  ]
};

export default useRole;


// useEffect( ( ) => { 
    //     fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/user/${user?.email}`)
    //     .then( res => res.json( ))
    //     .then( data => {
    //         console.log( data ,'useEffect'  )
    //     } )
    //     .catch( err => {
    //         console.log( err ,'useEffect')
    //     })

    // } ,[user ])