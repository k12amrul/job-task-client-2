import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import useAuth from '../hooks/useAuth';
import { FaHome } from 'react-icons/fa';
// import { AuthContext } from '../cotexts/AuthProvider';


const Navbar = () => {

    const { user, logOut } = useAuth()
    //   const { user, logOut } = useContext(AuthContext)

    // console.log(user?.displayName, user?.photoURL)
    // console.log(user)
    const handleLogOUt = () => {
        logOut()
            .then(() => console.log('Successfully LogOUt'))
            .catch(() => console.log('error in LogOUt'))
    }

    const defaultImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZV0vdfGCjIlcD0LdVuAP3yeB0GMNp0cVJAPZm-HbTohNttxwDszvCCkajLQ&s'

    const navLinks = <>
        <li><NavLink to='/home' >Home</NavLink> </li>
        <li><NavLink to='/products' >Products </NavLink> </li>
        {/* <li><NavLink to='/allArtCraft' > All-Art-Craft</NavLink> </li>
    <li><NavLink to='/addCraftItem' > Add-Craft-Item</NavLink> </li> */}


        {/* <li><NavLink to={`/myArtCraft/${user?.email}`} > My-Art-Craft-List </NavLink> </li> */}
        

       
        <li><NavLink to='/register' > Register</NavLink> </li>
        <li><NavLink to='/login' >Login</NavLink> </li>
        {/* <li><NavLink to='/bookings' > Bookings</NavLink> </li> */}
        
        {/* <li><NavLink to='/about' >About</NavLink> </li> */}

    </>
    return (
        <div className=' mb-20' >


            <div className="navbar bg-base-200   ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className=" menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navLinks
                            }


                        </ul>
                    </div>
                    <div className='flex justify-center items-center '>
                        <img className='w-9 h-9' src="data:image/png;base64,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" alt="" />
                        <h3 className=" text-xl"> Real-Home</h3>

                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal px-1">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end">

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                            </div>
                        </div>
                        {
                            user &&

                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-1 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>{user?.displayName} </li>
                                <li>
                                    <button onClick={handleLogOUt} className='btn btn-warning'> LogOut </button>
                                </li>
                                <li>
                                <NavLink to='/dashboard'  > Dashboard </NavLink>
                                </li>
                                {/* <li><button onClick={handleLogOUt} className='btn btn-warning'> LogOut </button></li> */}
                            </ul>

                        }
                    </div>

                </div>
            </div>

            {/* ---------------------- */}
            {/*         
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div> */}
            {/* ---------------------- */}

        </div>

    );
};

export default Navbar;