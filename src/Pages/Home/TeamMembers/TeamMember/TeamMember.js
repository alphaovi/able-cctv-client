import React from 'react';

const TeamMember = ({ member }) => {
    const { name, designation, img} = member;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body bg-[#2878EB]">
                <h2 className="card-title justify-center text-2xl text-white">{name}</h2>
                <p className="text-xl text-white">{designation}</p>
                
            </div>
        </div>
    );
};

export default TeamMember;