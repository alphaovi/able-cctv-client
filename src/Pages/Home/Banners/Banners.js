import React from 'react';
import carousel1 from "../../../img/carousel-1.jpg";
import carousel2 from "../../../img/carousel-2.jpg";
import carousel3 from "../../../img/carousel-3.jpg";

const Banners = () => {

    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={carousel1} className="w-full" alt="" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    {/* <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a> */}
                    <div className="hero-overlay bg-opacity-60">
                        <div className="hero-content text-center text-neutral-content">
                            <div className="p-20">
                                <h1 className="mb-5 text-xl">BEST SECURITY SERVICES</h1>
                                <p className="mb-5 text-7xl font-bold ">Safe & Secure Home For Your Family</p>
                                <div className="flex justify-between">
                                    <button className="btn btn-info  hover:bg-red-400">Get Quote</button>
                                    <button className="btn btn-error hover:bg-sky-400">Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>

            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={carousel2} className="w-full" alt="" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    {/* <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a> */}
                    <div className="hero-overlay bg-opacity-60">
                        <div className="hero-content text-center text-neutral-content">
                            <div className="p-20">
                                <h1 className="mb-5 text-xl">BEST SECURITY SERVICES</h1>
                                <p className="mb-5 text-7xl font-bold ">Safe & Secure Home For Your Family</p>
                                <div className="flex justify-between">
                                    <button className="btn btn-info  hover:bg-red-400">Get Quote</button>
                                    <button className="btn btn-error hover:bg-sky-400">Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={carousel3} className="w-full" alt="" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    {/* <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a> */}
                    <div className="hero-overlay bg-opacity-60">
                        <div className="hero-content text-center text-neutral-content">
                            <div className="p-20">
                                <h1 className="mb-5 text-xl">BEST SECURITY SERVICES</h1>
                                <p className="mb-5 text-7xl font-bold ">Safe & Secure Home For Your Family</p>
                                <div className="flex justify-between">
                                    <button className="btn btn-info  hover:bg-red-400">Get Quote</button>
                                    <button className="btn btn-error hover:bg-sky-400">Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={carousel3} className="w-full" alt="" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    {/* <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a> */}
                    <div className="hero-overlay bg-opacity-60">
                        <div className="hero-content text-center text-neutral-content">
                            <div className="p-20">
                                <h1 className="mb-5 text-xl">BEST SECURITY SERVICES</h1>
                                <p className="mb-5 text-7xl font-bold ">Safe & Secure Home For Your Family</p>
                                <div className="flex justify-between">
                                    <button className="btn btn-info  hover:bg-red-400">Get Quote</button>
                                    <button className="btn btn-error hover:bg-sky-400">Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banners;