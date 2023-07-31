import useFetch from "../../hooks/useFetch";
import Stations from "../../components/Stations/Stations"

function StationsPage() {
  const url = "https://s3-us-west-1.amazonaws.com/cdn-web.tunein.com/stations.json";
  const { data, loading, error } = useFetch(url, null);
  let stations = data?.data;

  return (
    <div className="">
      <div>
        <h1> TuneIn </h1>
      </div>
      <div>
        {loading && <p>Loading... </p>}
        <Stations data={stations} />
        {error && <p>Something went wrong</p>}
      </div>
    </div>
  );
}

export default StationsPage;
