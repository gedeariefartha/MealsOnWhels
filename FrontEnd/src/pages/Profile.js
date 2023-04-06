import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import "../App.css";
import Layout from "../components/Layout/Layout";

const userImage =
  "https://kerma.widyatama.ac.id/wp-content/uploads/2021/05/blank-profile-picture-973460_1280.png";

const Profile = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <div className="d-flex justify-content-center align-items-center my-5 py-5">
        <div className="profile">
          <div className="text-center">
            <img src={userImage} alt="User" className="img-thumbnail" width={"350px"}/>
          </div>
          <h2 className="text-center mt-3 fw-semibold">Name: {authCtx.name}</h2>
          <h2 className="text-center mt-3 fw-semibold">{authCtx.role}</h2>
          <h2 className="text-center mt-3 fw-semibold">Phone Number: {authCtx.phone}</h2>
          <h2 className="text-center mt-3 fw-semibold">Address: {authCtx.address}</h2>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;