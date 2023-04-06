import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import AuthContext from "../context/AuthContext";
import Content from "./Content";
const Home =()=>{
    const authCtx = useContext(AuthContext);
    return (
        
        <div>
            <Layout>
            <header className=" py-5">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center">
                        <div className="col-lg-8 col-xl-7 col-xxl-6">
                            <div className="my-5 text-center text-xl-start">
                                <h1 className="display-5 fw-bolder mb-2">Merry meal</h1>
                                <p className="lead fw-normal text-dark-50 mb-4">Explore your neighbourhood to help each other.</p>
                                {!authCtx.isLoggedIn && (<NavLink to="/login" className="btn btn-outline-primary me-0 me-lg-3 mb-3 mb-lg-0">Join Now</NavLink>)}
                                
								
                            </div>
                        </div>
                        <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img className="img-fluid rounded-3 my-5" src="https://img.freepik.com/free-vector/group-young-people-waving-hand_23-2148361692.jpg?w=1060&t=st=1672901278~exp=1672901878~hmac=f45bc10597ad64163e84e8fb5575ecf814a82e03f22497c1152801ebcce1a860" alt="..." /></div>
                    </div>
                </div>
      </header>
<Content></Content>
            </Layout>
        </div>
    )
}
export default Home;