import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Navbar = () => {
    const { user ,logOut } =useContext(AuthContext);
    console.log(user)
   
    const handleLogOut = () =>{
      logOut()
      .then(()=>console.log('user logged'))
      .catch(error => console.error(error))
    }
  
    const navLinks =<>
    <li className="font-bold text-fuchsia-800 text-md"><NavLink to='/'>Home</NavLink>
    </li>
    <li className="font-bold text-fuchsia-800 text-md"><NavLink to='/dashboard'>DashBoard</NavLink>
    </li>

    <li className="font-bold text-fuchsia-800 text-md"><NavLink to='/about'>About Us</NavLink>
    </li>
    
    
  
    </>
    return (
        <div>
              <div className="w-11/12 mx-auto pt-6 pb-6">
            <div className="navbar bg-cyan-50 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <img className="w-14 h-12" src="https://i.ibb.co/xHFf7my/successful-job-interview-2d-isolated-illustration-vector.jpg" alt="" />
    <a className=" text-4xl  italic text-amber-600 font-bold">React<span className="text-gray-700">Task</span><span className="text-xl text-red-600">Magnet</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    
    {
            user? <>
            
            <span>{user.email}</span>
            <a onClick={handleLogOut} className="btn btn-error rounded-full">sign out</a>
            
            
            </>
            : <Link to='/login'>
              <button className="btn-error px-4 py-2 rounded-md">Login</button>
            </Link>
          }
  </div>
</div>
            
        </div>
            
            
        </div>
    );
};

export default Navbar;