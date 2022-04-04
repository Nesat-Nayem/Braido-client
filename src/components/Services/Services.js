import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://salty-reaches-02915.herokuapp.com/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  // console.log(services);
  return (
    <div>
      <div className="services">
        <div className="row container">
          <h1 className="my-5 fw-bolder ">
            {" "}
            <span className="featured">FEATURED</span> PRODUCTS
          </h1>

          {services?.map((pd) => (
            <div key={pd._id} className="col-md-4 col-lg-4">
              <div>
                <div className="col">
                  <div className="card hovereffect">
                    <img src={pd.img} />
                    <div className="card-body"></div>

                    <div className="overlay">
                      <p className="icon-links">
                        <a href="#">
                          <span className="fa fa-heart"></span>
                        </a>
                        <a href="#">
                          <span className="fa fa-search"></span>
                        </a>

                        <Link to={`/services/${pd._id}`}>
                          <span className="fa fa-ellipsis-v"></span>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
