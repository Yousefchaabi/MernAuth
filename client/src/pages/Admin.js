import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProfiles } from "../redux/actions/profileActions";
import RowDetails from "../components/RowDetails";

function Admin() {
  const profiles = useSelector((state) => state.profiles);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetProfiles());
    console.log(profiles.profiles);
  }, []);
  return (
    <div className="container p-4 mt-4">
      <div className="row justify-content-evenly mt-4">
        <div className="col-lg-12 col-md-12 mt-4">
          <div className="d-flex mb-5 justify-content-center">
            <i className="fa-solid fa-user fs-1 mx-2"></i>{" "}
            <h2
              className="d-flex justify-content-center align-items-center"
              style={{ fontSize: "19px", fontWeight: "bold" }}
            >
              Profiles list
            </h2>
          </div>
          <div
            className="shadow-lg p-3 mb-5 bg-body rounded"
            style={{ backgroundColor: "white" }}
          >
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">name</th>
                  <th scope="col">email</th>
                  <th scope="col">role</th>
                  <th scope="col">telephone</th>
                  <th scope="col">city</th>
                  <th scope="col">country</th>
                  <th scope="col">bio</th>
                  <th scope="col">actions</th>
                </tr>
              </thead>
              <tbody>
                {profiles.profiles.map(
                  ({ _id, user, tel, city, country, bio }) => (
                    <RowDetails
                      _id={_id}
                      user={user}
                      tel={tel}
                      city={city}
                      country={country}
                      bio={bio}
                    />
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
