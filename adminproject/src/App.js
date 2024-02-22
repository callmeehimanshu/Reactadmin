import ButtonAppBar from "./navbar/Navbar"
import TemporaryDrawer from "./sidebar/sidebar"
import CalenderType from "./calender/calenderType"
import Reports from "./reports/reports"
import WorkOrders from "./workOrders/workOrders"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react"

function App() {
  return (
    <Router>
      <div className>
        <ButtonAppBar></ButtonAppBar>
        <Routes>
          <Route path="/calenderType" element={<CalenderType />}></Route>
          <Route path="/reports" element={<Reports />}></Route>
          <Route path="/workOrders" element={<WorkOrders />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;


