
import axios from "axios";
import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import Layout from "../Layout";



const CampaignAdd = () => {
  const authUser = useContext(AuthContext);
  const navigate = useNavigate();
  const [postStatus, setPostStatus] = useState("");

  const inputTitleRef = useRef();
  const inputDescRef = useRef();
  const inputFileRef = useRef();
  const inputStatusRef = useRef();


  const onSubmitHandler = (e) => {
    e.preventDefault();
    const inputTitle = inputTitleRef.current.value;
    const inputDesc = inputDescRef.current.value;
    // const inputFile = inputFileRef.current.value;
    const inputStatus = inputStatusRef.current.value;
    // const formData = new FormData();
    // formData.append("file", inputFile)
    axios
      .post(
        "http://localhost:8082/api/meal/post-campaign",
        {
          title: inputTitle,
          desc: inputDesc,
          status:inputStatus
        },
        {
          headers: { Authorization: `Bearer ${authUser.token}` },
        }
      )
      .then((res) => {
        console.log(res.data);
        navigate("/admin-dashboard");
      })
      .catch((err) => {
        console.log(err.message);
        setPostStatus("FAILED");
      });

    inputTitleRef.current.value = "";
    inputDescRef.current.value = "";
    // inputFileRef.current.value = "";
    inputStatusRef.current.value = "";
  };

  return (
    <Layout>
    <div className="d-flex justify-content-center my-5">
      <div className="form-auth">
        <h3 className="mb-3 fw-semibold text-center">Post Campaign</h3>
        {postStatus === "FAILED" && (
          <div className="form-error text-center">Failed to post data <br/> Invalid  error</div>
        )}
        <form onSubmit={onSubmitHandler}>
          <label className="form-label">Campaign</label>
          <input className="form-control"
            ref={inputTitleRef} 
            name="title" 
            type="text"
            required="required"/>
					

          <label className="form-label">Description</label>
          <input
            ref={inputDescRef}
            className="form-control mb-3 ps-4 pe-0"
            type="text"
            name="desc"
          />

          {/* <label className="form-label">Image</label>
          <input
            ref={inputFileRef}
            className="form-control mb-3 ps-4 pe-0"
            type="file"
            name="file"
          /> */}
          <label className="form-label">Status</label>
          <select
            ref={inputStatusRef}
            className="form-control mb-3 ps-4 pe-0"
            type="text"
            name="status"
          >
            <option value={true}>Avalible</option>
            <option value={false}>unavailable</option>
          </select>
          <button
            type="submit"
            className="btn btn-success"
            style={{ width: "100%" }}
          >
            Post Campaign
          </button>
        </form>
      </div>
    </div>
    </Layout>
  );
};

export default CampaignAdd;