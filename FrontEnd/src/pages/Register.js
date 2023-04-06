import RegisterForm from "../components/Auth/RegisterPage";
import Layout from "../components/Layout/Layout";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRole } from "../services/StoreService";
const Register = () => {
  const [roles, setRole] = useState({
    name: "",
  });

  const params = useParams();

  useEffect(() => {
    // Get Store Detail
    getRole(
      params.roleId,
      (roles) => {
        setRole({
          name: roles.name,
        });
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {};
  }, [params.roleId]);

    return (
      <Layout>
        <RegisterForm {...roles} />
      </Layout>
    );
  };
  
  export default Register;