import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import {
  getListCampaign,
} from "../services/StoreService";

const CampaignList = () => {
  const [listCampaign, setListCampaign] = useState([]);

  // Get List Car
  useEffect(() => {
      getListCampaign(
        (data) => {
          setListCampaign(data);
        },
        (error) => {
          console.log(error);
        }
      );

    return () => {};
  });




  return (
<Layout>
  <div className="container my-5">
      <div className="mt-3 row">
        
        {listCampaign.map((cam) => (
          <div className="col-12 col-md-6 col-md-4 col-lg-3 mb-3">
          <div className="card">
            <img className="card-img-top" src="https://brainmd.com/blog/wp-content/uploads/boost-happiness-by-helping-others-1.jpg" alt={cam.title} />
            <div className="card-body d-flex justify-content-between flex-column">
              <p className=" fw-bold m-1">
                 {cam.title} 
              </p>
              
              <Link
                className="btn btn-primary btn-car"
                to={`${cam.title}/${cam.id}`}
              >
                Join Campaign
              </Link>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
</Layout>
  );
};

export default CampaignList;