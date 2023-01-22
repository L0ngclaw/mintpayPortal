import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Wrapper/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Test from "./pages/Test";
import Contact from "./pages/Contact";
import PendingPayements from "./pages/PendingPayements";
import AccountSettings from "./pages/AccountSettings";

const App = () => {
  return (
    <>
      {/* <Sidebar> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<Test />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pendingpayements" element={<PendingPayements />} />
          <Route path="/accountsettings" element={<AccountSettings />} />
        </Routes>
      </Router>
      {/* </Sidebar> */}
    </>
  );
};

export default App;
