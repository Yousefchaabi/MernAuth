import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Inputs from "../components/Inputs";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../redux/actions/authActions";
import assetOne from "../assets/Data_security_05.jpg";
function Login() {
  const [login, setLogin] = useState({});
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors);
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginAction(login, navigate));
  };
  return (
    <div className="container ">
      <div className="row" style={{ marginTop: "150px" }}>
        <div className="col-8">
          <div className="row justify-content-evenly mt-4">
            <div className="col-lg-8 col-md-8 mt-4 ">
              <div className="d-flex mb-5">
                <i className="fa-solid fa-right-to-bracket fs-1 mx-2"></i>{" "}
                <h2
                  className="d-flex justify-content-center align-items-center"
                  style={{ fontSize: "19px", fontWeight: "bold" }}
                >
                  Login
                </h2>
              </div>
              <div
                className="p-6 shadow-lg p-3 mb-5 bg-body rounded"
                style={{ backgroundColor: "white" }}
              >
                <form onSubmit={onSubmit} className="p-3">
                  <div>
                    <Inputs
                      name="email"
                      label="Email"
                      type="text"
                      icon="fa-solid fa-at"
                      onChangeHandler={onChangeHandler}
                      errors={errors.email}
                    />
                  </div>
                  <div className="mt-5">
                    <Inputs
                      name="password"
                      label="Password"
                      type="password"
                      icon="fa-solid fa-key"
                      onChangeHandler={onChangeHandler}
                      errors={errors.password}
                    />
                  </div>

                  <div className="d-flex justify-content-between mt-5">
                    <button type="submit" className="btn btn-outline-primary">
                      Save <i className="fa-solid fa-floppy-disk"></i>
                    </button>
                    <Link to="/register">I don't have account</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 shadow-md bg-body rounded">
          <img src={assetOne}></img>
        </div>
      </div>
    </div>
  );
}

export default Login;
