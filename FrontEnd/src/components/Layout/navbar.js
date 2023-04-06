import { useContext } from "react";
import logo from '../../img/KynLogo.png';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import {BsPersonCircle } from "react-icons/bs";
const NavigationBar = (props) => {
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();
    const logoutHandler = () => {
        authCtx.logout();
        navigate("/login");
    };
    return (
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="" width="80" height="74" />MerryMeal</a>
                <button className="navbar-toggler" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {!authCtx.isLoggedIn && (
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-0 me-lg-auto fw-semibold text-uppercase">
                            <li className="nav-item"><Link to="/" className="nav-link ">Home</Link></li>
                            <li className="nav-item"><NavLink to="/about" className="nav-link ">About Us</NavLink></li>
                            <li className="nav-item"><NavLink to="/contact" className="nav-link ">Contact Us</NavLink></li>
                            <li className="nav-item"><NavLink to="/donation" className="nav-link ">Donation</NavLink></li>
                            <li className="nav-item"><NavLink to="/campaign" className="nav-link ">Campaign</NavLink></li>
                        </ul>
                        <div className="nav-button d-flex flex-column flex-lg-row mx-3">
                            <NavLink to="/login" className="btn btn-outline-warning me-0 me-lg-3 mb-3 mb-lg-0">Login</NavLink>
                            <NavLink to="/signup" className="btn btn-success mb-3 mb-lg-0">Signup</NavLink>
                        </div>
                    </div>
                )}
                {authCtx.isLoggedIn && (

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-0 me-lg-auto fw-semibold text-uppercase">
                            <li className="nav-item"><Link to="/" className="nav-link ">Home</Link></li>
                            <li className="nav-item"><NavLink to="/about" className="nav-link ">About Us</NavLink></li>
                            <li className="nav-item"><NavLink to="/contact" className="nav-link ">Contact Us</NavLink></li>
                            <li className="nav-item"><NavLink to="/campaign" className="nav-link ">Campaign</NavLink></li>

                        </ul>
                        <div className=" text-light fs-5 item-allign-center">
                            <div className="navbar-nav dropdown">
                                <a className="nav-link dropdown-toggle text-light fs-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                     <BsPersonCircle/> {authCtx.name}
                                </a>
                                <ul className="dropdown-menu bg-primary px-3 " aria-labelledby="navbarDropdown">
                                {authCtx.role.includes("admin") && (
                                    <>
                                    <li className="mb-3"><NavLink to="/admin-dashboard" className="btn btn-outline-warning me-0 me-lg-3 mb-3 mb-lg-0 ">Dashboard</NavLink></li>
                                    <li className="mb-3"><NavLink to="/add-campaign" className="btn btn-outline-warning me-0 me-lg-3 mb-3 mb-lg-0 ">Campaign </NavLink></li>
                                    <li className="mb-3"><NavLink to="/volunterr" className="btn btn-outline-warning me-0 me-lg-3 mb-3 mb-lg-0 ">volunteer </NavLink></li>
                                    <li className="mb-3"><NavLink to="/admin-order" className="btn btn-outline-warning me-0 me-lg-3 mb-3 mb-lg-0 ">Order List </NavLink></li>
                                    <li className="mb-3"><NavLink to="/admin-delivery" className="btn btn-outline-warning me-0 me-lg-3 mb-3 mb-lg-0 ">Delivery List </NavLink></li>
                                    </>
                                )}
                                {authCtx.role.includes("member") && (
                                    <>
                                    <li className="mb-3"><NavLink to="/menu" className="btn btn-outline-warning me-0 me-lg-3 mb-3 mb-lg-0 ">Menu</NavLink></li>
                                    </>
                                )}
                                {authCtx.role.includes("caregiver") && (
                                    <>
                                    <li className="mb-3"><NavLink to="/caregiver-dashboard" className="btn btn-outline-warning me-0 me-lg-3 mb-3 mb-lg-0 ">Dashboard</NavLink></li>
                                    <li className="mb-3"><NavLink to="/caregiver-delivery" className="btn btn-outline-warning me-0 me-lg-3 mb-3 mb-lg-0 ">Manage Delivery</NavLink></li>
                                    </>
                                )}
                                {authCtx.role.includes("partner") && (
                                    <>
                                    <li className="mb-3"><NavLink to="/order-dashboard" className="btn btn-outline-warning me-0 me-lg-3 mb-3 mb-lg-0 ">Order</NavLink></li>
                                    <li className="mb-3"><NavLink to="/menu-dashboard" className="btn btn-outline-warning me-0 me-lg-3 mb-3 mb-lg-0 ">Menu</NavLink></li>
                                    <li className="mb-3"><NavLink to="/add-menu" className="btn btn-outline-warning me-0 me-lg-3 mb-3 mb-lg-0 ">Add Menu</NavLink></li>
                                    </>
                                    
                                )}
                                 {authCtx.role.includes("staff") && (
                                    <>
                                    <li className="mb-3"><NavLink to="/order-dashboard" className="btn btn-outline-warning me-0 me-lg-3 mb-3 mb-lg-0 ">Order</NavLink></li>
                                    <li className="mb-3"><NavLink to="/menu-dashboard" className="btn btn-outline-warning me-0 me-lg-3 mb-3 mb-lg-0 ">Menu</NavLink></li>
                                    <li className="mb-3"><NavLink to="/add-product" className="btn btn-outline-warning me-0 me-lg-3 mb-3 mb-lg-0 ">Add Product</NavLink></li>
                                    </>
                                    
                                )}
                                {authCtx.role.includes("rider") && (
                                    <li className="mb-3"><NavLink to="/rider-dashboard" className="btn btn-outline-warning me-0 me-lg-3 mb-3 mb-lg-0 ">Deliver Request</NavLink></li>
                                )}
                                    <li className="mb-3"><NavLink to="/profile" className="btn btn-outline-warning me-0 me-lg-3 mb-3 mb-lg-0">Profile</NavLink></li>
                                    <li className="mb-3"><button className=" btn btn-warning mb-3 mb-lg-0"onClick={logoutHandler}>Logout </button></li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                )}
            </div>
        </nav>
    )
}
export default NavigationBar;