// import React, { useEffect, useState } from "react";
// import { Routes, Route,
//    Link
//   //  useRouteMatch 
//   } from "react-router-dom";

// import "./Dashboard.css";
// import AddServices from "./../AddServices/AddServices";
// import Review from "./../Review/Review";
// import MyBookings from "./../MyBookings/MyBookings";
// import MakeAdmin from "./../MakeAdmin/MakeAdmin";
// import useFirebase from "./../../hooks/useFirebase";
// import PayUs from "../PayUs/PayUs";
// import MangeOrder from "./../MangeOrder/MangeOrder";
// import MantainOrders from "../MantainOrders/MantainOrders";

// const Dashbaord = () => {
//   // let { path, url } = useRouteMatch();
//   const { user,handleLogout } = useFirebase();
//   const [isAdmi, setIsAdmin] = useState(false);
  

//   useEffect(() => {
//     fetch(`http://localhost:5000/checkAdmin/${user?.email}`)
//       .then((res) => res.json())
//       .then((data) => {
      
//         if (data[0]?.role === "admin") {

//           setIsAdmin(true);
//         } else {
//           setIsAdmin(false);
//         }
//       });
//   }, [user.email]);

//   console.log(isAdmi);
//   return (
//     <div>
//       <div className="dashboard-container ">
//         <div className="row">
//           <div className="col-md-3 ">
//             <div className="dashboard text-start ps-3">
//               <h5 className="fw-bold py-3">{user.email && isAdmi? <h5>ADMIN</h5>:<h5>user</h5>} DASHBOARD</h5>

//                   {/* <Link to={`${url}/myBooking`}> */}
//                   <Link to={`/myBooking`}>

//                   <li className="dashboard-menu mb-2">My Orders</li>
//                 </Link>
                
//               <Link to={`/review`}>
//                 <li className="dashboard-menu mb-2">Review</li>
//               </Link>
             
//               <Link to={`/payUs`}>
//                 <li className="dashboard-menu mb-2">Pay Us</li>
//               </Link>
         
//               <Link to="/login">
//                 <button className="mb-4 btn" onClick={handleLogout}>Logout</button>
//               </Link>
              
//                 {user.email && isAdmi?
              
//                   <Link to={`/addService`}>
//                     <li className="dashboard-menu mb-2">Add Service</li>
//                   </Link>

//                    :<div></div>
//                 }
                

//                 {user.email&& isAdmi? 
//                   <Link to={`/manageOrder`}>
//                   <li className="dashboard-menu mb-2">Manage Orders</li>
//                 </Link>
//                 :<div></div>}


//                 {/* {user.email&& isAdmi?  */}
//                 {user.email? 

//                 <Link to={`/makeAdmin`}>
//                   <li className="dashboard-menu mb-2">Make Admin</li>
//                 </Link>
//                 :<div></div>}


//                 {user.email && isAdmi? 
//                 <Link to={`/mantainOrders`}>
//                   <li className="dashboard-menu mb-2">Manage Services</li>
//                 </Link>
//                 : <div></div>}
//               {user.email&& isAdmi? 
                
//                 <Link to="/login">
//                 <button className="btn" onClick={handleLogout}>Logout</button>
//               </Link>
                
//                 :<div></div>}
             
//             </div>
//           </div>
//           <div className="col-md-9">
//             <Routes>
//               <Route element={<MyBookings/>}>
//                 {/* <MyBookings></MyBookings> */}
//               </Route>
//               <Route path={<Review/>}>
//                 {/* <Review></Review> */}
//               </Route>

//               <Route path={<PayUs/>}>
//                 {/* <PayUs></PayUs> */}
//               </Route>

//               <Route path={<AddServices/>}>
//                 {/* <AddServices></AddServices> */}
//               </Route>
//               <Route path={<MakeAdmin/>}>
//                 {/* <MakeAdmin></MakeAdmin> */}
//               </Route>
              
//               <Route path={<MangeOrder/>}>
              
//                 {/* <MangeOrder></MangeOrder> */}
//               </Route>

//               <Route path={<MantainOrders/>}>             
//               {/* <MantainOrders></MantainOrders> */}
//               </Route>
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashbaord;


