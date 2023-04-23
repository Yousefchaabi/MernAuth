import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Logout } from "../redux/actions/authActions";

function Navbar({ user }) {
  const dispatch = useDispatch();
  const LogoutHandler = () => {
    dispatch(Logout());
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-body rounded">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Mern Profile
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className=" navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {user.role === "ADMIN" ? (
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/admin"
                >
                  Admin
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
          <div className="d-flex">
            <div className="mx-4">
              {!user.isConnected ? (
                <>
                  <Link className="btn btn-outline-primary ml-5" to="/login">
                    Login
                  </Link>
                  <Link className="btn btn-outline-primary ml-5" to="/register">
                    Register
                  </Link>
                </>
              ) : (
                <Link
                  className="btn btn-outline-primary ml-5"
                  to="#"
                  onClick={LogoutHandler}
                >
                  Logout
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
