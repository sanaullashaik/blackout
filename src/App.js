import "./App.css";
import "antd/dist/antd.min.css";
// import Homepage from "./components/Homepage/Homepage";
import { BrowserRouter } from "react-router-dom";
import routes from "./components/route";

function App() {
  return <BrowserRouter>{routes}</BrowserRouter>;
}

export default App;
