import ButtonAppBar from "./navbar/Navbar"
import TemporaryDrawer from "./sidebar/sidebar"
import CalenderType from "./calender/calenderType"
import Reports from "./reports/reports"
import WorkOrders from "./workOrders/workOrders"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react"

function App() {
  const [data1, setData1]= useState([])
  return (
    <Router>
      <div className>
        <ButtonAppBar></ButtonAppBar>
        <Routes>
          <Route path="/calenderType" element={<CalenderType />}></Route>
          <Route path="/reports" element={<Reports setData1={setData1}/>}></Route>
          <Route path="/workOrders" element={<WorkOrders data1={data1}/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;


