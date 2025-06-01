import { Route, Routes } from "react-router-dom";
import App from "../App";
import { Gratitude } from "../Gratitude";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/gratitude/" element={<Gratitude/>}/>
    </Routes>
  );
}

export default AppRoutes;
