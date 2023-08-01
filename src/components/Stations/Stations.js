import React from "react";
import Card from "../Card/Card"
import "./Stations.css"
import { useNavigate} from 'react-router-dom';


export default function Stations(props) {
  const navigate = useNavigate();
  let stations = props.data;

  let fetchStationDetails = (item) => {
    navigate('/station/details', {state:item});
  }

  return (
    <div className="stations">
      {stations && stations.map(function(data){
        return <div key={data.id} className="station-cards" onClick={() => fetchStationDetails(data)}>
          <Card>
            <img src={data.imgUrl} alt="img" />
            <div className="station-container">
              <div> <b> {data.name} </b> </div>
              <div> Rating: {data.popularity} </div>
              <div>{data.tags[0]}</div>
            </div>
          </Card>
        </div>
      })}
    </div>
  );
}
