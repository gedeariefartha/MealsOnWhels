
import axios from "axios";
import { useContext, useRef, useState } from "react";
import AuthContext from "../../../context/AuthContext";
import Layout from "../Layout";



const MenuAdd = () => {
  const authUser = useContext(AuthContext);
  const [registerStatus, setRegisterStatus] = useState("");

  const inputNameRef = useRef();
  const inputDescRef = useRef();
  const inputStatusRef = useRef();
  const inputPartnernRef = useRef();


  const onSubmitHandler = (e) => {
    e.preventDefault();
    const inputName = inputNameRef.current.value;
    const inputDesc = inputDescRef.current.value;
    const inputstatus = inputStatusRef.current.value;
    const inputPartner = inputPartnernRef.current.value;

    axios
      .post(
        "http://localhost:8082/api/meal/post-menu",
        {
          name: inputName,
          desc: inputDesc,
          status: inputstatus,
          partnerid:inputPartner,
        },
        {
          headers: { Authorization: `Bearer ${authUser.token}` },
        }
      )
      .then((res) => {
        setRegisterStatus("SUCCESS");
        console.log(res);
      })
      .catch((err) => {
        setRegisterStatus("FAILED");
        console.log(err.message);
      });

    inputNameRef.current.value = "";
    inputDescRef.current.value = "";
    inputStatusRef.current.value = "";
    inputPartnernRef.current.value = "";
  };

  return (
  <Layout>  
    <div className="d-flex justify-content-center my-5">
      <div className="form-auth">
        <h3 className="mb-3 fw-semibold text-center">Post Menu</h3>
        {registerStatus === "FAILED" && (
            <div className="form-error text-center">Register Failed</div>
          )}
          {registerStatus === "SUCCESS" && (
            <div className="form-success text-center">
              {inputNameRef.current.value} Register successfully!!
            </div>
          )}
        <form onSubmit={onSubmitHandler}>
          <label className="form-label">Menu Name</label>
          <input className="form-control"
            ref={inputNameRef} 
            name="name" 
            type="text"
            required="required"/>
					

          <label className="form-label">Desc</label>
          <input
            ref={inputDescRef}
            className="form-control mb-3 ps-4 pe-0"
            type="text"
            name="desc"
          />

          <label className="form-label">Status</label>
          <select
            ref={inputStatusRef}
            className="form-control mb-3 ps-4 pe-0"
            type="text"
            name="status"
          >
            <option value={true}>Avalible</option>
            <option value={false}>unavailable</option>
          </select>
         
          <input
            ref={inputPartnernRef}
            className="form-control mb-3 ps-4 pe-0"
            type="text"
            name="partnerid"
            value={authUser.userId}
          />

          <button
            type="submit"
            className="btn btn-success"
            style={{ width: "100%" }}
          >
            Post Menu
          </button>
        </form>
      </div>
    </div>
  </Layout>  
  );
};

export default MenuAdd;