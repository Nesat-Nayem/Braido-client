import React from 'react';
import './BlogCard.css';
const BlogCard = (props) => {

    const {Title, description,photoURL } = props.Blog;

    return (
      
            <div className="mb-3 col-lg-4 col-md-6 col-sm-12 container">
            <div className="card shadow-lg w-100 h-100 text-center rounded">
                <div className="card-body ">
                    <div className='hover15 column'>
                        <figure>
                       
                        <img className="img-fluid mb-5" src={photoURL} alt="" />
                      
                        </figure>
                    </div>
                 

                 
                    <h5 className="card-title text-start textMargin">{Title}</h5>
                    
                    <p className='text-start'>{description}</p>

                    <button className='btn btn-danger d-flex justify-content-end my-4'>Red more</button>
                </div>
                
            </div>
        </div>
      
    );
};


export default BlogCard;