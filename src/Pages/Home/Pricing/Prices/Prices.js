import React, { useEffect, useState } from 'react';
import Price from '../Price/Price';

const Prices = () => {
    const [servicePrices, setServicePrices] = useState([]);
    useEffect(() => {
        fetch("servicePrice.json")
            .then(res => res.json())
            .then(data => {
                setServicePrices(data)
                console.log(data)
            })

    }, [])
    return (
        <section>
            <h2 className="text-3xl text-[#2878EB] font-bold ">P R I C I N G <span className="p-4"> P L A N</span> </h2>
            <h1 className="text-5xl font-bold m-5 p-5">Pricing Plan For CCTV <br /> <span>Sercurity Services</span></h1>
            <div>
                <div className="p-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                    {
                        servicePrices.map(servicePrice => <Price
                            key={servicePrice._id}
                            servicePrice={servicePrice}
                        ></Price>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Prices;