import React from 'react';

const Service = ({ service }) => {
    const {serviceName, description, img } = service;
    return (
        <div>
            <div className="card bg-[#F14D5D]  w-96 h-96 shadow-xl  m-5">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body mt-5 text-left">
                    <h2 className="card-title text-[#ecedee]">CCTV</h2>
                    <h2 className="card-title">{serviceName}</h2>
                    <p className="text-white">{description}</p>
                    <div className="card-actions justify-end">
                        <button className="text-white badge badge-outline">Read More...</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;