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
            <div> {data.name} </div>
            <div> Rating: {data.popularity} </div>
            <div> {data.tags && data.tags.map(function(tag, index) {
                  return (<span key={index}> {tag} </span>)
                })}
            </div>
          </Card>
        </div>
      })}
    </div>
  );
}
