import React from "react";
import about1 from "./../assets/about1.svg";
import about2 from "./../assets/about2.svg";
import about3 from "./../assets/about3.svg";
import about4 from "./../assets/about4.svg";
import about5 from "./../assets/about5.svg";
import "./_myStyle.css"

const Content = () => {
  return (
    <div>
      <section className="servicescontent">
        <div className="servicescontent-heading">
          <h2>Services Which Merry-Meals Provided.</h2>
          <p>
            Meery-Meals is a charitable organization that prepares and delivers
              a hot noon meal. MerryMeal has partnered with several
              food service providers across the country to provide the quickest
              delivery possible. Merry-Meals also open donate for anyone who want to help and support us.
          </p>
        </div>

        <div className="boxcontent-container">
          <div className="boxcontent">
            <img src={about1} />
            <font>Log-In to our secure website</font>
            <p>
              To begin the process, please Log-In to our secure system.
        
            </p>
          </div>

          <div className="boxcontent">
            <img src={about3} />
            <font>Donate</font>
            <p>
              for anyone who want to help and support us, can donates by
              transfering money or food.please Contact Us more details
              information if required.
            </p>
          </div>

          <div className="boxcontent">
            <img src={about2} />
            <font>Menu</font>
            <p>
              Menu are provided for member that has been register, the member available to choose menu base on images that display
            </p>
          </div>

          <div className="boxcontent">
            <img src={about4} />
            <font>Order delivery</font>
            <p>
              the food that has been choice and order, will packing and delivery
              into youre address by our drivers team.
            </p>
          </div>

          <div className="boxcontent">
            <img src={about5} />
            <font>Drivers</font>
            <p>
              just stay well at home, our drivers teams will bring food to youre
              home
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
