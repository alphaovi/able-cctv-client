import React from 'react';

const Price = ({ servicePrice }) => {
    const { serviceName, price, services } = servicePrice;
    return (
        <div>
            <div className="border-solid border-2 border-indigo-600 rounded-none card h-[500px] w-96 bg-base-100 shadow-xl">
                <div className="h-40 bg-[#2878EB]">
                    <h1 className="text-5xl text-white font-bold">{serviceName}</h1>
                    <h1 className="text-5xl text-white font-bold mt-4">$ {price} <span className="text-xl">/ Mo</span></h1>
                </div>
                <div className="card-body items-center text-center">
                    <div className="">
                        <ul className=" divide-y-4 divide-slate-400/25">
                            {services.map((service, index) => <li key={index}>{service}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="justify-center card-actions">
                <button className="btn btn-active rounded-none normal-case">Order Now</button>
            </div>
        </div>
    );
};

export default Price;