import BangladeshMap from "./components/MapComponent";
import BangladeshMapBox from "./components/BangladeshMapMapbox";
import MapComponentsHighChart from "./components/BangladeshMapHighChart";
import CoffeeMap from "./components/HigchartTreeView";
import WorldFlight from "./components/WorldFlight";
//import BangladeshDistrictsMap from "./components/BangladeshMapMapBoxDstrict";




function App() {

  return (
    <div style={{ display: "flex" }}>
      {/* <BangladeshMap />
      <BangladeshMapBox />
      <MapComponentsHighChart /> */}
      <CoffeeMap />
      {/* <BangladeshDistrictsMap /> */}
      {/* <WorldFlight /> */}
    </div>
  );
}

export default App;
