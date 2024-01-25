import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {
  Analytics,
  Chainsetup,
  Community,
  Logs,
  PaymentsGateway,
  Promotions,
  Rewards,
  UserData,
} from "./Pages";

function App() {


  return (
    <>
      <Router>
        <Routes>
         <Route path="/" element={<Analytics />} />
          <Route path="/Chain-setup" element={<Chainsetup />} />
          <Route path="/community" element={< Community />} />
          <Route path="/logs" element={< Logs />} />
          <Route path="/Payments-Gateway" element={< PaymentsGateway />} />
          <Route path="/ Promotions" element={<  Promotions />} />
          <Route path="/Rewards" element={< Rewards />} />
          <Route path="/User-Data" element={< UserData />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
