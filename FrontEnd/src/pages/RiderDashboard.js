
import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import AuthContext from "../context/AuthContext";
import { getListDeliverRider } from "../services/StoreService";
const RiderDasboard =()=>{
    const authCtx = useContext(AuthContext);
    const [listDeliver, setListDeliver] = useState([]);

    
    // Get List Delivery for deliver
    useEffect(() => {

        getListDeliverRider(
          authCtx.userId,
          (data) => {
            console.log(data);
            setListDeliver(data);
          },
          (error) => {
            console.log(error);
          }
        );
      return () => {};
    },[authCtx.userId]);
    return (
        
      <div>
      <Layout>
      <h2>My Delivery</h2>
          <div className="container">
              <table border={"1px"} className="table">
                  <tr className="text-center">

                      <th >Date Time</th>
                      <th >Menu</th>
                      <th >Member Name</th>
                      <th >Phone</th>
                      <th >Address</th>
                      
                  </tr>
                  {listDeliver.map((cam) => (
                  <tr className="text-center">
                      <td >{cam.datetime}</td>
                      <td >{cam.orderid.menuid.name}</td>
                      <td >{cam.memberid.name}</td>
                      <td >{cam.memberid.phone}</td>
                      <td >{cam.memberid.address}</td>
                      
                  </tr>
                  ))}
              </table>
          </div>
      </Layout>
  </div>
    )
}
export default RiderDasboard;