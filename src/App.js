import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home";
// import AddServices from "./components/AddServices/AddServices";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

// import Dashbaord from "./components/Dasboard/Dashbaord";
import Details from "./components/Details/Details";

import MangeOrder from "./components/MangeOrder/MangeOrder";
import AllServices from "./components/AllServices/AllServices";
import Footer from "./components/Footer/Footer";

import MyBookings from "./components/MyBookings/MyBookings"

// import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AboutUs from "./components/AboutUs/AboutUs";
import Payment from "./components/Payment/Payment";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={ <Home/>}>
           {/* </Home> */}
          </Route>

          <Route path="/home" element={<Home/>}>
          </Route>
          <Route path="/aboutUs" element={<AboutUs/>}>
          </Route>


          <Route path="/register" element={<Register/>}>
            {/* <Register></Register> */}
          </Route>

          <Route path="/allServices" element={<AllServices/>}>
          </Route>

          <Route path="/myBooking" element={<MyBookings/>}>
          </Route>



          <Route path="/login" element={<Login/>}>
            {/* <Login></Login> */}
          </Route>
      
          {/* <Route path="/manageOrder" element={<MangeOrder/>}>
            <MangeOrder></MangeOrder>
          </Route> */}

          {/* <Route path="/services/:serviceId" element={<PrivateRoute> <Details/> </PrivateRoute>}>
            <Details></Details>
          </Route> */}

          <Route path="/services/:serviceId" element={<Details/>}>
            
          </Route>

          <Route path="/myBookings/:paymentId" element={<Payment/>}>
            
          </Route>



          {/* <Route path="/addServices" element= {<AddServices/>}>
            <AddServices></AddServices>
          </Route> */}

          <Route path="/manageOrders" element={<MangeOrder/>}>
            {/* <MangeOrder></MangeOrder> */}
          </Route>

          {/* <Route path="/dashboard" element=" <PrivateRoute> <Dashbaord/> </PrivateRoute> ">
            <Dashbaord></Dashbaord>
          </Route> */}

          {/* <Route path="/dashboard" element={<Dashbaord/>}>
            <Dashbaord></Dashbaord>
          </Route> */}

          {/* <Route path="/addService" element={<AddServices/>}>
            <AddServices></AddServices>
          </Route> */}

          {/* <Route path="/mantainOrders" element={<MantainOrders/>}>
            <MantainOrders></MantainOrders>
          </Route> */}

        </Routes>

        <Footer></Footer>

      </BrowserRouter>     
    </div>
  );
}

export default App;
