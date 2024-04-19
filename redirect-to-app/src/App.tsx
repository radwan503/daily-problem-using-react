
import { Button } from "antd";
import { BrowserRouter } from 'react-router-dom';

import "./App.css";
import RedirectToApp from "./components/RedirectApp";

function App() {

  return (
    <BrowserRouter>
      <RedirectToApp />
      <Button type="primary" style={{ marginLeft: "5px" }}>CLear LocalHost</Button>
    </BrowserRouter>
  );
}

export default App;
