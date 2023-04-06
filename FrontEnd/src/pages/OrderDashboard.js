import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import AuthContext from "../context/AuthContext";
import { getListOrderPartner } from "../services/StoreService";
const OrderDasboard = () => {
  const authCtx = useContext(AuthContext);

  const [listOrder, setListOrder] = useState([]);
  const inputIdRef = useRef();
  const inputStatusRef = useRef();
  const [registerStatus, setRegisterStatus] = useState("");
  const onSubmitHandler = (e) => {
    const inputId = inputIdRef.current.value;
    const inputStatus = inputStatusRef.current.value;
    axios
      .post("http://localhost:8082/api/meal/edit-order", {
        id: inputId,
        status: inputStatus,
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
    inputStatusRef.current.value = "";
  };

  // Get List Order as partner
  useEffect(() => {
    getListOrderPartner(
      authCtx.userId,
      (data) => {
        console.log(data);
        setListOrder(data);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {};
  }, [authCtx.userId]);
  return (
    <div>
      <Layout>
        <h2>Dashboard Order Partner</h2>
        <div className="container">
          <table border={"1px"} className="table">
            <tr className="text-center">
              <th>id</th>
              <th>Menu</th>
              <th>Member</th>
              <th>Phone</th>
              <th>Date Time</th>
              <th>Action</th>
            </tr>
            {listOrder.map((cam) => (
              <tr className="text-center">
                <td>{cam.id}</td>
                <td>{cam.menuid.name}</td>
                <td>{cam.memberid.name}</td>
                <td>{cam.memberid.phone}</td>
                <td>{cam.datetime}</td>
                <td>
                  <form onSubmit={onSubmitHandler}>
                    <input
                      className="form-control"
                      ref={inputIdRef}
                      name="orderid"
                      type="hidden"
                      value={cam.id}
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
  );
};
export default OrderDasboard;
