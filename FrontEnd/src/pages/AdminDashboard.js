import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import Layout from "../components/Layout/Layout";
import AuthContext from "../context/AuthContext";
import { getListUser } from "../services/StoreService";
const AdminDasboard =()=>{
    const authCtx = useContext(AuthContext);
    const [listUser, setListUser] = useState([]);
    const inputNameRef = useRef();
    const inputEmailRef = useRef();
    const inputPasswordRef = useRef();
    const inputRoleRef = useRef();
    const inputAddressRef = useRef();
    const inputPhoneRef = useRef();
  
    const [registerStatus, setRegisterStatus] = useState("");
  
    const onSubmitHandler = (e) => {
      e.preventDefault();
      const inputName = inputNameRef.current.value;
      const inputEmail = inputEmailRef.current.value;
      const inputPassword = inputPasswordRef.current.value;
      const inputPhone = inputPhoneRef.current.value;
      const inputAddress = inputAddressRef.current.value;
      const inputRole = inputRoleRef.current.value;
      axios
        .post("http://localhost:8082/api/auth/signup", {
          name: inputName,
          email: inputEmail,
          password: inputPassword,
          phone: inputPhone,
          address : inputAddress,
          role:inputRole,
        })
        .then((res) => {
          setRegisterStatus("SUCCESS");
          console.log(res);
        })
        .catch((err) => {
          setRegisterStatus("FAILED");
          console.log(err.message);
        });
  
      inputNameRef.current.value = "";
      inputEmailRef.current.value = "";
      inputPasswordRef.current.value = "";
      inputRoleRef.current.value = "";
      inputAddressRef.current.value = "";
      inputPhoneRef.current.value = "";
    };
  
    // Get List User
    useEffect(() => {
        getListUser(
          (data) => {
            console.log(data);
            setListUser(data);
          },
          (error) => {
            console.log(error);
          }
        );
  
      return () => {};
    });
    return (
        
        <div>
            <Layout>
                <h2>Dashboard Admin</h2>
                <div className="d-flex justify-content-center">
        <div className="form-auth my-5 py-5 bg-light">
          <h3 className="mb-3 fw-semibold text-center">Add New User</h3>
          <form onSubmit={onSubmitHandler}>
            {registerStatus === "FAILED" && (
              <div className="form-error text-center">Register Failed</div>
            )}
            {registerStatus === "SUCCESS" && (
              <div className="form-success text-center">
                {inputNameRef.current.value} Register successfully!!
              </div>
            )}
            <input
              ref={inputNameRef}
              className="form-control mb-3 ps-4 pe-0"
              type="text"
              name="name"
              placeholder="Your name"
            />
            <input
              ref={inputEmailRef}
              className="form-control mb-3 ps-4 pe-0"
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              ref={inputPhoneRef}
              className="form-control mb-3 ps-4 pe-0"
              type="text"
              name="phone"
              placeholder="phone number"
            />
            <input
              ref={inputAddressRef}
              className="form-control mb-3 ps-4 pe-0"
              type="text"
              name="address"
              placeholder="Address"
            />
            <input
              ref={inputPasswordRef}
              className="form-control mb-3 ps-4 pe-0"
              type="password"
              name="password"
              placeholder="Password"
            />
            <select
              ref={inputRoleRef}
              className="form-control mb-3 ps-4 pe-0"
              type="text"
              name="role"
            >
                <option value={"member"}>Member</option>
                <option value={"caregiver"}>Caregiver</option>
                <option value={"partner"}>Partner</option>
                <option value={"rider"}>Rider</option>
                <option value={"admin"}>Admin</option>

            </select>
            <button type="submit" className="btn btn-primary btn-auth">
              Add New User 
            </button>
          </form>
        </div>
      </div>
                <div className="container">
                    <table>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Role</th>
                        </tr>
                        {listUser.map((cam) => (
                        <tr>
                            <td>{cam.id}</td>
                            <td>{cam.name}</td>
                            <td>{cam.email}</td>
                            <td>{cam.phone}</td>
                            <td>{cam.role}</td>
                        </tr>
                        ))}
                    </table>
                </div>
      

            </Layout>
        </div>
    )
}
export default AdminDasboard;