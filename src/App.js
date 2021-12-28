import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Details from "./components/Details/Details";
import Footer from "./components/Footer/Footer";
import MyBookings from "./components/MyBookings/MyBookings"
import AboutUs from "./components/AboutUs/AboutUs";
import Payment from "./components/Payment/Payment";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>  

<Navbar></Navbar>

<Routes>

  <Route path="/" element={ <Home/>}>     
  </Route>

  <Route path="/home" element={<Home/>}>
  </Route>

  <Route path="/aboutUs" element={<AboutUs/>}>
  </Route>

  <Route path="/register" element={<Register/>}>

  </Route>
  <Route path="/myBooking" element={<MyBookings/>}>
  </Route>
  
  <Route path="/login" element={<Login/>}>       
  </Route>

  <Route path="/services/:serviceId" element={<PrivateRoute> <Details/> </PrivateRoute>}>           
  </Route>

  <Route path="/myBookings/:paymentId" element={<Payment/>}>           
  </Route>

</Routes>

<Footer></Footer>

</BrowserRouter>  
        </AuthProvider>   
    </div>
  );
}

export default App;
