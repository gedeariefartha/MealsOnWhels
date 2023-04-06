import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import logo from "../img/KynLogo.png";
import partner1 from "./../assets/partner1.png";
import partner2 from "./../assets/partner2.png";
import partner3 from "./../assets/partner3.png"
import "./_myStyle.css"
const AboutUs = () => {
    return (
        <Layout>
<div>
        <section className="about-us">
          <div className="about">
            <div className="row">
                <div className="col-md">
            <img
              className="pic"
              src={logo}
              alt="Second slide"
              style={{ maxHeight: "500px" }}
            />
            </div>
            <div className="text col-md">
              <h2>About Us</h2>
              <h4>
                Merry <span>Meals</span>
              </h4>
              <p>
                MerryMeal is a charitable organization that prepares and
                delivers a hot noon meal to qualified adults living at home who
                are unable to cook for themselves or maintain their nutritional
                status due to age, disease, or disability. The service will be
                available Monday through Friday. Frozen meals will be provided
                to members who are not within a 10-kilometer radius of their
                outsourced kitchens and support over the weekend. MerryMeal has
                partnered with several food service providers across the country
                to provide the quickest delivery possible.
              </p>
              <div className="data">
              <NavLink to="/contact" className="hire"> Contact us for more information</NavLink>
              </div>
              </div>
            </div>
          </div>
        </section>
       
        <div className="fullco row">
          <div className="wrapper">
            <h1>Our Partner</h1>
            <p>This is our food partner service that work together with us</p>
            <div className="contentt-box">
              <div className="card">
                <img className="pic" src={partner1} alt="Second slide" />
                <h2>Netherland Food Partnership</h2>
                <p>
                  Netherlands Food Partnership connects and supports Merry Meals
                  charitable organization
                </p>
              </div>
              <div className="card">
                <img className="pic" src={partner2} alt="Second slide" />
                <h2>Lovanio Gourmet Company</h2>
                <p>
                  Full-service partner for food distribution companies in
                  Kuwait.
                </p>
              </div>

              <div className="card">
                <img className="pic" src={partner3} alt="Second slide" />
                <h2>Blue food Partnership</h2>
                <p>
                  Blue foods are the most highly traded food products in the
                  world
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Layout>
    )
}
export default AboutUs;
