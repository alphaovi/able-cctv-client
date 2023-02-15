import React from 'react';

const Testimonial = ({ comment }) => {
    const { name, description, designation, img } = comment;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="avatar justify-center">
                        <div className="w-24 rounded-full ring-offset-base-100 ring-offset-2">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <p className="text-gray-500">{description}</p>
                    <div className="mt-5">
                        <h2 className="card-title justify-center text-black font-bold">{name}</h2>
                        <p className="text-gray-500">{designation}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;