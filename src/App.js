import './App.css';
import useFetch from "./hooks/useFetch";
import Stations from "./components/Stations/Stations"

function App() {
  const url = "https://s3-us-west-1.amazonaws.com/cdn-web.tunein.com/stations.json";
  const { data, loading, error } = useFetch(url, null);
  console.log("here i am", data?.data[0])
  let test = data?.data
  return (
    <div className="App">
      <header> TuneIn </header>
      <div>
        {loading && <p>Loading... </p>}
        {data && (
          <Stations data={test} />
        )}
        {error && <p>Something went wrong</p>}
      </div>
    </div>
  );
}

export default App;
