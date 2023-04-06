import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import Layout from "../components/Layout/Layout";
import AuthContext from "../context/AuthContext";
import { getListVolunteer } from "../services/StoreService";
const VolunterrDasboard =()=>{
    const authCtx = useContext(AuthContext);
    const [listUser, setListUser] = useState([]);
   
  
    // Get List User
    useEffect(() => {
        getListVolunteer(
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
                <h2>Dashboard Volunterr</h2>
  
                <div className="container">
                    <table className="table">
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Campaign</th>
                            
                        </tr>
                        {listUser.map((cam) => (
                        <tr>
                            <td>{cam.id}</td>
                            <td>{cam.name}</td>
                            <td>{cam.email}</td>
                            <td>{cam.phone}</td>
                            <td>{cam.campaignId.title}</td>
                        </tr>
                        ))}
                    </table>
                </div>
      

            </Layout>
        </div>
    )
}
export default VolunterrDasboard;