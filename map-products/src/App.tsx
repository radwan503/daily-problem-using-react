import BangladeshMap from "./components/MapComponent";
import BangladeshMapBox from "./components/BangladeshMapMapbox";
import MapComponentsHighChart from "./components/BangladeshMapHighChart";
//import BangladeshDistrictsMap from "./components/BangladeshMapMapBoxDstrict";




function App() {

  return (
    <div style={{ display: "flex" }}>
      <BangladeshMap />
      <BangladeshMapBox />
      <MapComponentsHighChart />
      {/* <BangladeshDistrictsMap /> */}
    </div>
  );
}

export default App;
