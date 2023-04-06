import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import AuthContext from "../context/AuthContext";
import { getListDeliver, getListRider } from "../services/StoreService";
const CaregiverDeliverDasboard = () => {
  const authCtx = useContext(AuthContext);
  const [listDeliver, setListDeliver] = useState([]);
  const [listRider, setListRider] = useState([]);
  const inputRiderIdRef = useRef();
  const inputOrderIdRef = useRef();
  const inputMemberIdRef = useRef();
  const inputDeliveredRef = useRef();
  const inputStatusRef = useRef();
  const [registerStatus, setRegisterStatus] = useState("");

  // Get List order Delivery
  useEffect(() => {
    getListDeliver(
      (data) => {
        console.log(data);
        setListDeliver(data);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => { };
  });
  // Get List Rider
  useEffect(() => {
    getListRider(
      (data) => {
        console.log(data);
        setListRider(data);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => { };
  });
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const inputRiderId = inputRiderIdRef.current.value;
    const inputOrderId = inputOrderIdRef.current.value;
    const inputMemberId = inputMemberIdRef.current.value;
    const inputDelivered = inputDeliveredRef.current.value;
    const inputStatus = inputStatusRef.current.value;
    axios
      .post(
        "http://localhost:8082/api/meal/post-delivery",
        {
          riderid: inputRiderId,
          orderid: inputOrderId,
          memberid: inputMemberId,
          delivered: inputDelivered,
          status: inputStatus,
        }

      )
      .then((res) => {
        setRegisterStatus("SUCCESS");;
        console.log(res);
      })
      .catch((err) => {
        setRegisterStatus("FAILED");
        console.log(err.message);
      });

    inputRiderIdRef.current.value = "";
    inputOrderIdRef.current.value = "";
    inputMemberIdRef.current.value = "";
    inputDeliveredRef.current.value = "";
    inputStatusRef.current.value = "";
  };

  return (

    <div>
      <Layout>
        <h2>Dashboard Delivery </h2>
        {registerStatus === "FAILED" && (
          <div className="form-error text-center"> Invalid Error</div>
        )}
        {registerStatus === "SUCCESS" && (
          <div className="form-success text-center">
            Valid input!
          </div>
        )}
        <div className="container">
          <h3>Rider table</h3>
          <table className="table" border={"1px"}>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
            {listRider.map((cam) => (
              <tr>
                <td>{cam.id}</td>
                <td>{cam.name}</td>
                <td>{cam.email}</td>
                <td>{cam.phone}</td>
                <td>{cam.address}</td>
              </tr>
            ))}
          </table>
          <h3>Order table</h3>
          <table border={"1px"} className="table">
            <tr className="text-center">
              <th >id</th>
              <th >Menu</th>
              <th >Member</th>
              <th >Phone</th>
              <th className="bg-warning" >Address</th>
              <th >Date Time</th>
              <th >Action</th>
            </tr>
            {listDeliver.map((cam) => (
              <tr className="text-center">
                <td >{cam.id}</td>
                <td >{cam.menuid.name}</td>
                <td >{cam.memberid.name}</td>
                <td >{cam.memberid.phone}</td>
                <td className="bg-warning">{cam.memberid.address}</td>
                <td >{cam.datetime}</td>
                <td >
                  <form onSubmit={onSubmitHandler}>

                    <input className="form-control"
                      ref={inputOrderIdRef}
                      name="orderid"
                      type="hidden"
                      value={cam.id} />
                    <input className="form-control"
                      ref={inputRiderIdRef}
                      name="riderid"
                      type="number"
                      placeholder="Input Rider Id" />

                    <input className="form-control"
                      ref={inputMemberIdRef}
                      name="memberid"
                      type="hidden"
                      value={cam.memberid.id} />

                    <input
                      ref={inputDeliveredRef}
                      className="form-control mb-3 ps-4 pe-0"
                      type="hidden"
                      name="delivered"
                      value={false}
                    />
                    <input
                      ref={inputStatusRef}
                      className="form-control mb-3 ps-4 pe-0"
                      type="hidden"
                      name="status"
                      value={true}
                    />

                    <button
                      type="submit"
                      className="btn btn-success"
                      style={{ width: "100%" }}
                    >
                      Deliver Order
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </Layout>
    </div>
  )
}
export default CaregiverDeliverDasboard;