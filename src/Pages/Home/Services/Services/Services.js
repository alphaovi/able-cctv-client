import React, { useEffect, useState } from 'react';
import AddService from '../AddService/AddService';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(result => setServices(result))
    }, [])
    return (
        <div className="mt-32 p-6">
            <div>
                <p className="text-[#2878EB] text-3xl font-bold">S E R V I C E S</p>
                <h2 className="text-5xl font-bold mt-5">Our Excellent CCTV <br /> Security Services</h2>
            </div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 mt-10">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            {/* <AddService></AddService> */}
        </div>
    );
};

export default Services;