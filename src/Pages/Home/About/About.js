import React from 'react';
import about from "../../../img/about.jpg";
import star from "../../../img/star.png";
import award from "../../../img/medal.png"
const About = () => {
    return (
        <div className="mt-16">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={about} className="w-1/2 rounded-lg shadow-2xl" alt="" />
                    <div className="text-left">
                        <p className="text-3xl text-cyan-500 ">ABOUT US</p>
                        <h1 className="text-5xl font-bold">We offers Quality CCTV Systems & Services</h1>

                        <p className="py-6 text-xl font-bold text-gray-500">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                        <p className="text-xl">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet et magna</p>
                        <br />
                        <div className='flex gap-5 text-center'>
                            <div className="card box-border h-1/2 w-1/2 p-4 border-4 flex space-x-4 bg-[#2878EB]">
                                <div className="card-body text-white text-3xl font-bold">
                                    <img src={star} alt="" />
                                    <p>15 Years Experience</p>
                                </div>
                            </div>
                            <div className="card box-border h-1/2 w-1/2 p-4 border-4 flex space-x-4 bg-[#F14D5D]">
                                <div className="card-body  text-white text-3xl font-bold">
                                    <img src={award} alt="" />
                                    <p>Award Winning</p>
                                </div>
                            </div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;