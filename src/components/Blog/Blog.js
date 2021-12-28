import React, { useEffect, useState } from 'react';

import BlogCard from '../BlogCard/BlogCard';

const Blog = () => {

    const [Blogs, setBlogs] = useState([]);
    
    // Loading Data 
    useEffect(() => {
        fetch('./blogs.json')
            .then(res => res.json())
            // .then(reviews => console.log(reviews)
          
            .then(reviews => setBlogs(reviews))
                                 
         }, [])

    return (
        <section className="my-5 " id="testimonials">
            <div className="container">
              
               
                <div className="my-5">
                <h5 className="text-center">HAPPENINGS AROUND</h5>
                <h1 className="text-center fw-bold my-3">OUR <span style={{ color: '#ff4d30' }}>BLOG</span></h1>
                </div>
                              
                <div className="row">
                                    
                    {
                        Blogs.map(Blog => <BlogCard Blog={Blog}></BlogCard>)
                    }
                </div>
            </div>
        </section>
    );
};


export default Blog;