import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
// import ErrorPage from "../Shared/ErrorPage";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
// import Dashboard from "../Layout/Dashboard";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Shared/ErrorPage";
// import Home  from "../components/Home/Home"
// import Home1 from "../components/Home/Home1";
// import AdminProfile from "../Pages/Dashboard/AdminProfile/AdminProfile";
// import ManageMembers from "../Pages/Dashboard/ManageMembers/ManageMembers";
// import AgreementRequests from "../Pages/Dashboard/AgreementRequests/AgreementRequests";
// import PrivateRoute from "./PrivateRoute";
// import UserProfile from "../Pages/Dashboard/User/UserProfile";
// import Announcements from "../Pages/Dashboard/Announcements/Announcements";
// import MemberProfile from "../Pages/Dashboard/Member/MemberProfile";
// import ManageCoupons from "../Pages/Dashboard/ManageCoupons/ManageCoupons";
// import Payment from "../Pages/Dashboard/Payment/Payment";
// import Aparments from "../components/Home/Aparments";
// import Loadannouncement from "../Pages/Dashboard/Member/Loadannouncement";
// import PaymentHistory from "../Pages/Dashboard/Payment/PaymentHistory";
// import UpdateCoupon from "../Pages/Dashboard/ManageCoupons/UpdateCoupon";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                // loader: () => fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/apartments`),
                element:  <Home></Home>,
            },
            {
                path: '/home',
                element: <Home></Home>,
            },
            // {
            //     path: '/aparment',
            //     loader: () => fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/apartmentcount`),
            //     element: <Aparments> </Aparments>,
            // },
            


        ]

    },
    // {
    //     path: 'dashboard',
    //     element:  <PrivateRoute> 

    //         <Dashboard></Dashboard>
    //     </PrivateRoute>  ,
    //     children: [

    //         {
    //             path: 'adminHome',
    //             element: <AdminProfile> </AdminProfile>
    //         },
    //         {
    //             path: 'manageUsers',
    //             loader: () => fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/users`),
    //             element: <PrivateRoute>

    //                 <ManageMembers> </ManageMembers>
    //             </PrivateRoute>
    //         },
    //         {
    //             path: 'agreementRequests',
    //             loader: () => fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/agreements`),
    //             element: <AgreementRequests> </AgreementRequests>
    //         },
    //         {
    //             path: 'manageCoupons',
    //             loader: () => fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/coupons`),
    //             element: <ManageCoupons> </ManageCoupons>
    //         },
    //         {
    //             path: 'updateCoupons',
    //             loader: () => fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/coupons`),
    //             element: <UpdateCoupon> </UpdateCoupon>
    //         },
    //         {
    //             path: 'announcement',
    //             element: <Announcements></Announcements>
    //         },
    //         // {
    //         //     path: 'adminHome',
    //         //     element: <AdminHome></AdminHome>
    //         // },

    //         {
    //             path: 'userProfile',
    //             loader: ({ params }) => fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/agreements/${params?.email}`),
    //             element: <UserProfile></UserProfile>
    //         },
            
            
    //         {
    //             path: 'memberProfile',
    //             element: <MemberProfile></MemberProfile>
    //         },
    //         {
    //             path: 'payment',
    //             element: <Payment> </Payment>
    //         },
    //         {
    //             path: 'paymentHistory/',
    //             loader:  ( )=> fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/payments`) ,
    //             // loader: ({ params }) => fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/payments/${params?.email}`),
    //             element: <PaymentHistory></PaymentHistory>
    //         },
    //         {
    //             path: 'loadAnnouncement',
    //             loader: () => fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/announcement`),
    //             element: <Loadannouncement></Loadannouncement>
    //         },
    //     ]
    //     // dashboard 
    // }
    , {
        path: '/register',
        element: <SignUp></SignUp>
    },
    {
        path: '/login',
        element: <Login> </Login>
    },

]

)


export default router