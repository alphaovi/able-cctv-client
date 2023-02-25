import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, handleSubmit } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;
    
    const navigate = useNavigate();

    const { data: specialties, isLoading } = useQuery({
        queryKey: ["specialty"],
        queryFn: async () => {
            const res = await fetch("https://cctv-service-server.vercel.app/serviceSpecialty");
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }

    const handleAddTechnician = (data) => {
        console.log(data)
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?&key=${imageHostKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                console.log(imgData.data.url);
                const technician = {
                    name : data.name,
                    email: data.email,
                    specialty: data.specialty,
                    image : imgData.data.url
                };

                // save technicans information to the database
                fetch("https://cctv-service-server.vercel.app/technician", {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json",
                        authorization: `bearer ${localStorage.getItem("accessToken")}`
                    },
                    body: JSON.stringify(technician)
                })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    toast.success(`${data.name} is added successfully`);
                    navigate("/dashboard/managetechnicians");
                })
            }
        })
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleAddTechnician)}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <p className="text-2xl font-bold text-center">Add A Technician</p>
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered"
                                    {...register("name", {
                                        required: "Enter Your Name"
                                    })} />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered"
                                    {...register("email", {
                                        required: "Email Addres is Required"
                                    })} />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Specialty</span>
                                </label>
                                <select {...register("specialty")} className="select select-bordered w-full max-w-xs">
                                    {
                                        specialties.map(specialty => <option
                                            key={specialty._id}
                                            value={specialty.serviceName}
                                        >CCTV {specialty.serviceName}</option>)
                                    }
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="file" placeholder="Photo" className="input input-bordered"
                                    {...register("image", {
                                        required: "Photo Is Required"
                                    })} />

                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add Technician</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddDoctor;