import axios from "axios";
import Layout from "../components/Layout/Layout";
import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { getMenu } from "../services/StoreService";
import { Image } from "react-bootstrap";

const Menu = () => {
  const [cam, setCampaign] = useState({
    name: "",
    desc:"",
    image:"",
    menuid:"",
    partnerid:""
  });
  const [registerStatus, setRegisterStatus] = useState("");
  const inputMenuRef = useRef();
  const inputMemberRef = useRef();
  const inputPartnerRef = useRef();
  const authUser = useContext(AuthContext);
  const params = useParams();

  useEffect(() => {
    // Get Store Detail
    getMenu(
      params.menId,
      (dta) => {
        setCampaign({
          name: dta.name,
          desc: dta.desc,
          image: dta.image,
          menuid: dta.id,
          partnerid: dta.partnerid,
        },
        );
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {};
  }, [params.menId]);

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
      <Layout>
        <div className="text-center pt-3">
        <Image className="img-item-banner img-fluid" src="https://familydoctor.org/wp-content/uploads/2010/05/shutterstock_300553067.jpg"alt=""  width={"400px"}/>
        <h2>{cam.name}</h2>
        <p>{cam.desc}</p>
        </div>
        
            
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
            type="hidden"
            value={cam.menuid}/>
					

          
          <input
            ref={inputPartnerRef}
            className="form-control mb-3 ps-4 pe-0"
            type="hidden"
            name="partnerid"
            value={cam.partnerid.id}
          />

          <input
            ref={inputMemberRef}
            className="form-control mb-3 ps-4 pe-0"
            type="hidden"
            name="memberid"
            value={authUser.userId}
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
      </Layout>
    );
  };
  
  export default Menu;