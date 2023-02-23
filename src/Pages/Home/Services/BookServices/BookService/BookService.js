import React from 'react';

const BookService = ({ service, setSelectService }) => {
    const {serviceName, description, img, price } = service;
    return (
        <div>
            <div className="card bg-[#F14D5D]  w-96 h-96 shadow-xl  m-5">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body mt-5 text-left">
                    <h2 className="card-title text-[#ecedee]">CCTV</h2>
                    <h2 className="card-title">{serviceName}</h2>
                    <p className="text-white">{description}</p>
                    <p className="text-white">Price:$ {price}</p>
                    <div className="card-actions justify-center">
                        <label 
                        htmlFor="book-service"
                         className="btn btn-primary text-white"
                         onClick={() => setSelectService(service)}
                        >Book Service</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookService;