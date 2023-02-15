import React, { useEffect, useState } from 'react';
import TeamMember from '../TeamMember/TeamMember';

const TeamMembers = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch("teamMembers.json")
            .then(res => res.json())
            .then(data => {
                setMembers(data)
                console.log(data);
            })
    }, [])
    return (
        <div className="mt-10">
            <h3 className="text-3xl font-bold text-[#2878EB]">TEAM MEMBERS</h3>
            <h3 className="text-5xl font-bold mt-5">Our Professional Team <br />Members</h3>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 m-5 p-5"> 
                {
                    members.map(member => <TeamMember
                        key={member._id}
                        member={member}
                    ></TeamMember>)
                }
            </div>
        </div>
    );
};

export default TeamMembers;