import React from 'react';

const Blog = ({ blogPost }) => {
    const { name, designation, description, img } = blogPost;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body bg-[#2878EB]">
                <div className="flex p-2">
                    <h2 className="card-title justify-center text-2xl text-white">{name}</h2>
                    <p className="text-xl text-white">|| {designation}</p>
                </div>
                <p className="text-xl text-white">{description}</p>
            </div>
        </div>
    );
};

export default Blog;