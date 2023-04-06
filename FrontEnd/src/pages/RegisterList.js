import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import {
  getListRole,
} from "../services/StoreService";

const RegisterList = () => {
  const [listRole, setListRole] = useState([]);

  // Get List Car
  useEffect(() => {
      getListRole(
        (data) => {
          setListRole(data);
        },
        (error) => {
          console.log(error);
        }
      );

    return () => {};
  });




  return (
<Layout>
  <div className="container my-5">
      <div className="mt-3 row">
        
        {listRole.map((roles) => (
          <div className="col-12 col-md-6 col-md-4 col-lg-3 mb-3">
          <div className="card">
            <img className="card-img-top" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt={roles.name} />
            <div className="card-body d-flex justify-content-between flex-column">
              <p className=" fw-bold m-1">
                Be {roles.name} 
              </p>
              
              <Link
                className="btn btn-primary btn-car"
                to={`${roles.name}/${roles.id}`}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
</Layout>
  );
};

export default RegisterList;