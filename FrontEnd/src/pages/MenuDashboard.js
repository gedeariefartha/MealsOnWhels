import React, {  useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import AuthContext from "../context/AuthContext";
import { getListMenuPartner } from "../services/StoreService";
const MenuDasboard =()=>{
    const authCtx = useContext(AuthContext);
    const [listMenu, setListMenu] = useState([]);
    
    const params = useParams();
    // Get List Menu Partner
    useEffect(() => {
      
        getListMenuPartner(
          authCtx.userId,
          (data) => {
            console.log(data);
            setListMenu(data);
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
                <h2>Dashboard Menu Partner</h2>
                <div className="container">
                    <table className="table" border={"1px"}>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Description</th>
                            
                        </tr>
                        {listMenu.map((cam) => (
                        <tr>
                            <td>{cam.id}</td>
                            <td>{cam.name}</td>
                            <td>{cam.desc}</td>
                            
                        </tr>
                        ))}
                    </table>
                </div>
                

            </Layout>
        </div>
    )
}
export default MenuDasboard;