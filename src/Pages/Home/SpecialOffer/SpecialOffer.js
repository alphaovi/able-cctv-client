import React from 'react';

const SpecialOffer = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/vYTQf01/carousel-2.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-xl font-bold">SPECIAL OFFER</h1>
                        <h1 className="mb-5 text-4xl font-bold">Save 50% On All Items Your First Order</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div>
                            <button className="btn btn-primary m-5">Order Now</button>
                            <button className="btn btn-error m-5">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffer;