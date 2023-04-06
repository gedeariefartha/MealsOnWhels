
import Layout from "../components/Layout/Layout";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCampaign } from "../services/StoreService";
import VolunteerAdd from "../components/Layout/form/VolunteerAdd";
import { Image } from "react-bootstrap";
const Campaign = () => {
  const [cam, setCampaign] = useState({
    name: "",
    desc:"",
    image:"",
    campaignid:""
  });

  const params = useParams();

  useEffect(() => {
    // Get Store Detail
    getCampaign(
      params.camId,
      (dta) => {
        setCampaign({
          title: dta.title,
          desc: dta.desc,
          image: dta.image,
          campaignid: dta.id,

        });
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {};
  }, [params.camId]);

    return (
      <Layout>
        <div className="text-center pt-3">
        <Image className="img-item-banner img-fluid" src="https://brainmd.com/blog/wp-content/uploads/boost-happiness-by-helping-others-1.jpg"alt=""  width={"400px"}/>
        <h2>{cam.title}</h2>
        <p>{cam.desc}</p>
        </div>
        <VolunteerAdd {...cam} />
      </Layout>
    );
  };
  
  export default Campaign;