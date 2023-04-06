
import axios from "axios";
import { useRef, useState } from "react";

const VolunteerAdd = (cam) => {
  const [registerStatus, setRegisterStatus] = useState("");

  const inputNameRef = useRef();
  const inputPhoneRef = useRef();
  const inputEmailRef = useRef();
  const inputCampaignRef = useRef();


  const onSubmitHandler = (e) => {
    e.preventDefault();
    const inputName = inputNameRef.current.value;
    const inputPhone = inputPhoneRef.current.value;
    const inputEmail = inputEmailRef.current.value;
    const inputCampaign = inputCampaignRef.current.value;

    axios
      .post(
        "http://localhost:8082/api/meal/post-volunteer",
        {
          name: inputName,
          phone: inputPhone,
          email: inputEmail,
          campaignid:inputCampaign,
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

    inputNameRef.current.value = "";
    inputPhoneRef.current.value = "";
    inputEmailRef.current.value = "";
    inputCampaignRef.current.value = "";
  };

  return (
    
    <div className="d-flex justify-content-center my-5">
      <div className="form-auth">
        <h3 className="mb-3 fw-semibold text-center">Join Campaign</h3>
        {registerStatus === "FAILED" && (
            <div className="form-error text-center">Register Failed</div>
          )}
          {registerStatus === "SUCCESS" && (
            <div className="form-success text-center">
              {inputNameRef.current.value} Register successfully!!
            </div>
          )}
        <form onSubmit={onSubmitHandler}>
          <label className="form-label">Full Name</label>
          <input className="form-control"
            ref={inputNameRef} 
            name="name" 
            type="text"
            required="required"/>
					

          <label className="form-label">Email</label>
          <input
            ref={inputEmailRef}
            className="form-control mb-3 ps-4 pe-0"
            type="email"
            name="email"
          />

          <label className="form-label">Phone Number</label>
          <input
            ref={inputPhoneRef}
            className="form-control mb-3 ps-4 pe-0"
            type="text"
            name="phone"
          />
         
          <input
            ref={inputCampaignRef}
            className="form-control mb-3 ps-4 pe-0"
            type="hidden"
            name="campaignid"
            value={cam.campaignid}
          />

          <button
            type="submit"
            className="btn btn-success"
            style={{ width: "100%" }}
          >
            Join Campaign
          </button>
        </form>
      </div>
    </div>
    
  );
};

export default VolunteerAdd;