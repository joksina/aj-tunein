import React from "react";
import Card from "../Card/Card"


export default function Stations(props) {
  let stations = props.data;
  return (
    <div>
      {stations && stations.map(function(data){
        return <Card key={data.id}>
          <img src={data.imgUrl} alt="img" />
          <div> {data.name} </div>
          <div> Rating: {data.popularity} </div>
          <div> {data.tags && data.tags.map(function(tag, index) {
                return (<span key={index}> {tag} </span>)
              })}
          </div>
        </Card>
      })}
    </div>
  );
}
