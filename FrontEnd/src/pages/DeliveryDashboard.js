import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Navigate, redirect, useParams } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import { getListDeliveryMember } from "../services/StoreService";
const DeliveryDasboard = () => {
  const [listDeliver, setListDeliver] = useState([]);
  const params = useParams();
  const inputIdRef = useRef();
  const inputDeliveredRef = useRef();
  const [registerStatus, setRegisterStatus] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const inputId = inputIdRef.current.value;
    const inputDelivered = inputDeliveredRef.current.value;
    axios
      .post("http://localhost:8082/api/meal/edit-delivery", {
        id: inputId,
        delivered: inputDelivered,
      })
      .then((res) => {
        setRegisterStatus("SUCCESS");
        console.log(res);
      })
      .catch((err) => {
        setRegisterStatus("FAILED");
        console.log(err.message);
      });

    inputIdRef.current.value = "";
    inputDeliveredRef.current.value = "";
  };

  // Get List Delivery member
  useEffect(() => {
    getListDeliveryMember(
      params.meId,
      (data) => {
        console.log(data);
        setListDeliver(data);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {};
  }, [params.meId]);
  return (
    <div>
      <Layout>
        <h2>My Delivery</h2>
        {registerStatus === "FAILED" && (
          <div className="form-error text-center"> Invalid Error</div>
        )}
        {registerStatus === "SUCCESS" && (
          <div className="form-success text-center">Thank You!</div>
        )}
        <div className="container">
          <table border={"1px"} className="table">
            <tr className="text-center">
              <th>Date Time</th>
              <th>Menu</th>
              <th>Rider</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
            {listDeliver.map((cam) => (
              <tr className="text-center">
                <td>{cam.datetime}</td>
                <td>{cam.orderid.menuid.name}</td>
                <td>{cam.riderid.name}</td>
                <td>{cam.riderid.phone}</td>
                <td>{cam.datetime}</td>
                <td>
                  <form onSubmit={onSubmitHandler}>
                    <input
                      className="form-control"
                      ref={inputIdRef}
                      name="id"
                      type="hidden"
                      value={cam.id}
                    />

                    <input
                      ref={inputDeliveredRef}
                      className="form-control mb-3 ps-4 pe-0"
                      type="hidden"
                      name="delivered"
                      value={true}
                    />

                    <button
                      type="submit"
                      className="btn btn-success"
                      style={{ width: "100%" }}
                    >
                      Delivery Arrive
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </Layout>
    </div>
  );
};
export default DeliveryDasboard;
