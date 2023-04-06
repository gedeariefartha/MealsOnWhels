import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import Layout from "../components/Layout/Layout";
import AuthContext from "../context/AuthContext";
import { getListMember, getListMenu } from "../services/StoreService";
const CaregiverDasboard = () => {
    const authCtx = useContext(AuthContext);
    const [listMember, setListMember] = useState([]);
    const [listMenu, setListMenu] = useState([]);
    // Get List Menu
    useEffect(() => {
        getListMenu(
            (data) => {
                setListMenu(data);
            },
            (error) => {
                console.log(error);
            }
        );

        return () => { };
    });
    // Get List Member
    useEffect(() => {
        getListMember(
            (data) => {
                console.log(data);
                setListMember(data);
            },
            (error) => {
                console.log(error);
            }
        );

        return () => { };
    });
    //post order
    const inputMenuRef = useRef();
    const inputMemberRef = useRef();
    const inputPartnerRef = useRef();
    const [registerStatus, setRegisterStatus] = useState("");
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const inputMenu = inputMenuRef.current.value;
        const inputMember = inputMemberRef.current.value;
        const inputPartner = inputPartnerRef.current.value;
        
    
        axios
          .post(
            "http://localhost:8082/api/meal/post-order",
            {
              menuid: inputMenu,
              memberid: inputMember,
              partnerid: inputPartner,
              
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
    
        inputMenuRef.current.value = "";
        inputMemberRef.current.value = "";
        inputPartnerRef.current.value = "";
      };
    
    return (

        <div>
            <Layout>
                <h2>Caregiver Dashboard</h2>
                <div className="container">
                <div className="d-flex justify-content-center my-5">
      <div className="form-auth">
        
        {registerStatus === "FAILED" && (
            <div className="form-error text-center">Order Failed</div>
          )}
          {registerStatus === "SUCCESS" && (
            <div className="form-success text-center">
              {inputMenuRef.current.value} Ordered! 
            </div>
          )}
        <form onSubmit={onSubmitHandler}>
          
          <input className="form-control"
            ref={inputMenuRef} 
            name="menuid" 
            type="number"
            placeholder="Input Menu ID "/>

          <input
            ref={inputPartnerRef}
            className="form-control mb-3 ps-4 pe-0"
            type="number"
            name="partnerid"
            placeholder="input Partner ID"
          />

          <input
            ref={inputMemberRef}
            className="form-control mb-3 ps-4 pe-0"
            type="number"
            name="memberid"
            placeholder="Input MemberID"
          />
         
          <button
            type="submit"
            className="btn btn-success"
            style={{ width: "100%" }}
          >
            Order
          </button>
        </form>
      </div>
      </div>
                    <div className="row">
                        <div className="col-md">
                            <h3>Member table</h3>
                            <table className="table" border={"1px"}>
                                <tr>
                                    <th>id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                </tr>
                                {listMember.map((cam) => (
                                    <tr>
                                        <td>{cam.id}</td>
                                        <td>{cam.name}</td>
                                        <td>{cam.email}</td>
                                        <td>{cam.phone}</td>
                                        <td>{cam.address}</td>
                                    </tr>
                                ))}
                            </table>
                        </div>
                        <div className="col-md">
                        <h3>Menu table</h3>
                            <table className="table" border={"1px"}>
                                <tr>
                                    <th>id</th>
                                    <th>Menu</th>
                                    <th>Description</th>
                                    <th>Partner ID</th>
                                </tr>
                                {listMenu.map((cam) => (
                                    <tr>
                                        <td>{cam.id}</td>
                                        <td>{cam.name}</td>
                                        <td>{cam.desc}</td>
                                        <td>{cam.partnerid.id}</td>
                                    </tr>
                                ))}
                            </table>
                        </div>
                    </div>
                </div>


            </Layout>
        </div>
    )
}
export default CaregiverDasboard;