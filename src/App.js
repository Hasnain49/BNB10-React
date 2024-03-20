import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Wallet from "./Pages/Wallet/Wallet";
import Earnings from "./Pages/Earnings/Earnings";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/earnings" element={<Earnings />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
