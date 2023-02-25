import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);


    const url = `https://cctv-service-server.vercel.app/servicesBooking?email=${user.email}`;
    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ["servicesBooking", user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem("accessToken")}`
                }
            })
            const data = await res.json();
            return data;

        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className="mb-5">My Appointments</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Service Name</th>
                            <th>Date</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.isArray(bookings) && bookings.map((booking, i) =>
                                <tr className="hover cursor-pointer" key={booking._id}>
                                    <th>{i + 1}</th>
                                    <td>{booking?.customerName}</td>
                                    <td>{booking?.email}</td>
                                    <td>CCTV {booking.serviceName}</td>
                                    <td>{booking.date}</td>
                                    <td>
                                        {
                                            booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}><button className="btn btn-primary btn-xs">Pay Now</button></Link>
                                        }
                                        {
                                            booking.price && booking.paid && <span className="text-primary">Paid</span>
                                        }
                                    </td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;