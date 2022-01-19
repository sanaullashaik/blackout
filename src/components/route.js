import { Route } from "react-router-dom";
import { Routes } from "react-router";
import Homepage from "./Homepage/Homepage";
import HostForm from "./Homepage/HostForm";
import TableView from "./mywizard/TableView";

const routes = (
  <>
    <Homepage>
      <Routes>
        <Route path="/" element={<HostForm />} />
        <Route path="/mywizard" element={<TableView />} />
      </Routes>
    </Homepage>
  </>
);

export default routes;
