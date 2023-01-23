import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Wrapper/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Test from "./pages/Test";
import Contact from "./pages/Contact";
import PendingPayments from "./pages/PendingPayments";
import AccountSettings from "./pages/AccountSettings";

const App = () => {
  return (
    <>
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/test" element={<Test />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pendingpayements" element={<PendingPayments />} />
            <Route path="/accountsettings" element={<AccountSettings />} />
          </Routes>
        </Sidebar>
      </Router>
    </>
  );
};

export default App;
