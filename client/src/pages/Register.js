import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Inputs from "../components/Inputs";
import { useDispatch, useSelector } from "react-redux";
import { Registration } from "../redux/actions/authActions";
import assetTwo from "../assets/Checklist.jpg";

function Register() {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  // récupérer les erreurs
  const errors = useSelector((state) => state.errors);
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    setForm({
      //current state
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault(); // éviter les paramètres dans l'url
    dispatch(Registration(form, navigate));
  };
  return (
    <div className="container d-flex">
      <div className="row" style={{ marginTop: "150px" }}>
        <div className="col-6">
          <div className="row justify-content-evenly">
            <div className="d-flex mb-3">
              <i className="fa-solid fa-right-to-bracket fs-1 mx-2"></i>{" "}
              <h2>Register</h2>
            </div>
            <div
              className="p-6 shadow-lg p-3 mr-5 bg-body rounded"
              style={{ backgroundColor: "white" }}
            >
              <form onSubmit={onSubmit}>
                <Inputs
                  name="name"
                  label="Name"
                  type="text"
                  icon="fa-solid fa-user"
                  onChangeHandler={onChangeHandler}
                  errors={errors.name}
                />
                <Inputs
                  name="email"
                  label="Email"
                  type="text"
                  icon="fa-solid fa-at"
                  onChangeHandler={onChangeHandler}
                  errors={errors.email}
                />
                <Inputs
                  name="password"
                  label="Password"
                  type="password"
                  icon="fa-solid fa-key"
                  onChangeHandler={onChangeHandler}
                  errors={errors.password}
                />
                <Inputs
                  name="confirm"
                  label="Confirm Password "
                  type="password"
                  icon="fa-solid fa-key"
                  onChangeHandler={onChangeHandler}
                  errors={errors.confirm}
                />
                <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-outline-primary">
                    Save <i className="fa-solid fa-floppy-disk"></i>
                  </button>
                  <Link to="/login">I have account </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-4 p-3 ml-5">
          <img src={assetTwo}></img>
        </div>
      </div>
    </div>
  );
}

export default Register;
