import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import favicon from "../../asset/favicon.png";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">LogIn</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <img className="h-10 w-auto" src={favicon} alt="" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">{menuItems}</Link>
              </li>
              <li tabIndex={0}>
                <Link to="/" className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </Link>
                <ul className="p-2">{menuItems}</ul>
              </li>
              <li>
                <Link to="/">{menuItems}</Link>
              </li>
            </ul>
          </div>
          <img className="h-10 w-auto" src={favicon} alt="" />
          <h3 className="text-2xl text-green-400">MediGuide</h3>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>{menuItems}</li>
          </ul>
        </div>
        <div></div>
        <div className="navbar-end">
          <Link to="/" className="btn">
            {user?.uid ? (
              <div>
                <p>Welcome: {user.displayName}</p>
                <span>
                  <img
                    title={user.displayName}
                    className="w-3 h-3"
                    src={user.photoURL}
                    alt=""
                    referrerPolicy="no-referr"
                  />
                </span>
              </div>
            ) : (
              <p>No User</p>
            )}

            {user?.uid ? (
              <button onClick={handleLogOut} className="btn btn-secondary">
                Log Out
              </button>
            ) : (
              <NavLink className="btn btn-ghost normal-case text-xl" to="login">
                Login
              </NavLink>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
