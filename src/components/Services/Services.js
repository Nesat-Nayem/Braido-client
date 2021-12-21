import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Services.css'

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  // console.log(services);
  return (
    <div>
     
      <div className="services">
        <div className="row container">
          {services?.map((pd) => (

            <div key={pd._id} className="col-md-4 col-lg-4">
              
              {/* <div className="service p-3 border border m-2">
                <div className="service-img  ">
                  <img className="img-fluid" src={pd?.picture} alt="" />
                </div>
                <h5 className="m-3">{pd.name}</h5>
                <div className="d-flex  justify-content-between">
                <h4>${pd.price}</h4>
                <Link to={`/services/${pd._id}`}>
                  {" "}
                  <button className="btn btn-success">Buy Now</button>
                </Link>

                </div>
                <p className="text-start">{pd.description}</p>               
              </div> */}

              {/* costom */}

              <div>
                    <div className="col">
                        <div className="card hovereffect">
                        <img src={pd.img}/>
                        <div className="card-body">
                            {/* <h5 className="card-title text-start">{pd.name}</h5> */}
                           
                        </div>

                        
                        <div className="overlay">              
                        <p className="icon-links">
                        <a href="#">
                        <span className="fa fa-heart"></span>   
                        </a>
                        <a href="#">
                            <span className="fa fa-search"></span>
                        </a>
                        {/* <a href="#">
                            <Link to={`/services/${pd._id}`}>
                            <span className="fa fa-ellipsis-v"></span>
                            </Link>
                           
                        </a> */}
                        {/* <a ref={`/services/${pd._id}`}> */}
                            <Link to={`/services/${pd._id}`}>
                            <span className="fa fa-ellipsis-v"></span>
                            </Link>
                           
                        {/* </a> */}




                        </p>
                    </div>


                        </div>
                    </div>
                </div>

              {/* costom */}

            </div>



          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
