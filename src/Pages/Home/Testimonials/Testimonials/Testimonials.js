import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch("testimonial.json")
            .then(res => res.json())
            .then(result => {
                setComments(result)
                console.log(result);
            })
    }, [])
    return (
        <div>
            <h4 className="text-3xl font-medium text-[#2878EB] mt-20">TESTIMONIAL</h4>
            <h1 className="text-5xl font-bold mt-5">What People Say About <br /> Our Service</h1>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 p-5 mt-10">
                {
                    comments.map(comment => <Testimonial
                        key={comment._id}
                        comment={comment}
                    ></Testimonial>)
                }
            </div>
        </div>
    );
};

export default Testimonials;