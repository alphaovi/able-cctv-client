import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5001/users");
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    };



    const handleMakeAdmin = (id) => {
        fetch(`http://localhost:5001/users/admin/${id}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Update Admin Role")
                refetch();
            })

    }




    return (
        <div>
            <h4>All Users</h4>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Remove Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user?.role !== "admin" && <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-primary btn-xs">Admin</button>

                                    }
                                </td>
                                <td><button className="btn btn-primary btn-xs">Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;