import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const ManageTechnicians = () => {
    const [deleteingTechnician, setDeleteingTechnician] = useState(null);

    const closeModal = () => {
        setDeleteingTechnician(null);
    }


    const { data: technicians, isLoading, refetch } = useQuery({
        queryKey: ["technicians"],
        queryFn: async () => {
            try {
                const res = await fetch("http://localhost:5001/technicians", {
                    headers: {
                        authorization: `bearer ${localStorage.getItem("accessToken")}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (erorr) {

            }
        }
    })

    const handleDeleteTechnician = (technician) => {
        fetch(`http://localhost:5001/technicians/${technician._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast(`${technician.name} deleted successfully`);

            }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h3 className="font-bold text-3xl p-6">Manage your technicians: {technicians?.length}</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Avater</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            technicians?.map((technician, i) => <tr key={technician._id} className="hover">
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={technician.image} alt="" />
                                    </div>
                                </div></td>
                                <td>{technician.name}</td>
                                <td>{technician.email}</td>
                                <td>{technician.specialty}</td>
                                <td>
                                    <label onClick={() => setDeleteingTechnician(technician)} htmlFor="confirmation-modal" className="btn btn-error btn-xs">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteingTechnician && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deleteingTechnician.name}. It can not be undone.`}
                    successAction={handleDeleteTechnician}
                    successButtonName="Delete"
                    modalData={deleteingTechnician}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageTechnicians;