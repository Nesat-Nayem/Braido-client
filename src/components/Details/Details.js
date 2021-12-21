import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useFirebase from "./../../hooks/useFirebase";
const Details = () => {
  const [service, setService] = useState({});
  const { user } = useFirebase();
  const { serviceId } = useParams();
  const {
    register,
    handleSubmit,
    // reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.email = user?.email;
    // data.status = "pending";
    fetch("http://localhost:5000/addOrders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert('order is Recorded .... got it soon');
    
          // reset();
      }
      });
    
  };

  useEffect(() => {
    fetch(`http://localhost:5000/singleService/${serviceId}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data)
      // reset(data)

      });
     
  }, [serviceId]);
  // }, [serviceId, reset]);

  return (
    <div>
      <div className="details-container">
        <div className="row container">
          <div className="col-md-6">
            <img className="w-100" src={service.picture} alt="" />
            <h4 className="text-start m-3">{service?.name}</h4>
            <h4 className="text-end mb-3"> ${service?.price}</h4>
            <p>{service?.description}</p>
            
            
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit(onSubmit)}>
            
              <input 
              
                {...register("name",{ required: true}) }
                // placeholder="Name"
                
                defaultValue={service?.name}
                className="p-2 m-2 w-100 input-field"
              />

              {/* <input
                {...register("email")}
                placeholder="Email"
                
                defaultValue={user?.email}
                className="p-2 m-2 w-100 input-field"
              />         */}
             
            
              <input
           
              // readonly:true
                {...register("Price",{ required: true})}
                // placeholder="Price"
                defaultValue={service?.price}
                // type="number"
                className="p-2 m-2 w-100 input-field" 
              />
    
              <input
                type="submit"
                value="Order now"
                className="btn btn-info w-50"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
