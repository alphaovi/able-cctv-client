import React from 'react';
import addButton from "../../../../img/icons8-add-50.png"
const AddService = () => {
    return (
        <div>
            <div className="card bg-[#ECF4FF] w-96 h-96 shadow-xl border border-indigo-600 m-5">
                <div className="card-body text-center">
                    <h2 className="text-center text-cyan-500 text-2xl font-bold">Add New Service</h2>
                    <div className="mt-5 p-10">
                        <button className="p-10 text-black">Add Your New Service Here <br /> <img className='ml-12 mt-5' src={addButton} alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;