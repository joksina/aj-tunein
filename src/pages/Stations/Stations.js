import useFetch from "../../hooks/useFetch";
import Stations from "../../components/Stations/Stations"
import React, { useState, useEffect } from "react";
import { tagFilter } from '../../services/Utility';
import { buttons } from '../../constants/constant';


function StationsPage() {
  const url = "https://s3-us-west-1.amazonaws.com/cdn-web.tunein.com/stations.json";
  const { data, loading, error } = useFetch(url, null);

  const [stations, setFilteredStations] = useState(data?.data);
  useEffect(() => {
    setFilteredStations(data?.data);
  }, [data?.data]);

  function handleStations(e) {
    let type = e.target.value;
    type !== "all"
      ? setFilteredStations(tagFilter(data?.data, type))
      : setFilteredStations(data?.data);
  }


  return (
    <div className="">
      <div>
        <h1> TuneIn </h1>
        {buttons &&
          buttons.map((type) => (
            <button key={type.id} value={type.value} onClick={handleStations}>
              {type.name}
            </button>
          ))}
      </div>
      <div>
        {loading && <p>Loading... </p>}
        {stations && <Stations data={stations} />}
        {error && <p>Something went wrong</p>}
      </div>
    </div>
  );
}

export default StationsPage;
