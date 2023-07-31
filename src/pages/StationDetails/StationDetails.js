import { useLocation, useNavigate } from "react-router-dom";
import "./StationDetails.css"

function StationsDetails() {
  const station = useLocation();
  const navigate = useNavigate();
  const stationDetail = station.state;

  var goBack = () => {
    navigate('/stations');
  }

  return (
    <div className="">
      <div>
        <button onClick={() => goBack()}> &laquo; Back </button>
      </div>
      <div className="station-details">
        <h1> {stationDetail?.name} </h1>
        <div className="img-container">
          <img className="img-detail" src={stationDetail?.imgUrl} alt="img" />
        </div>
        <div className="description"> {stationDetail?.description} </div>
        <audio width="400" controls autoPlay>
          <source src={stationDetail?.streamUrl} type="audio/mp3" />
        </audio>
      </div>
    </div>
  );
}

export default StationsDetails;
