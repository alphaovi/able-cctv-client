import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../../../Shared/Loading/Loading';
import BookingModal from '../../BookingModal/BookingModal';
import BookService from '../BookService/BookService';

const BookServices = ({ selectedDate }) => {
    // const [services, setServices] = useState([]);
    const [selectService, setSelectService] = useState(null);

    const { data: services, isLoading, refetch} = useQuery({
        queryKey: ["services"],
        queryFn: async () => {
            const res = await fetch("https://cctv-service-server.vercel.app/services");
            const data = await res.json();
            return data;
        }

    })
    if (isLoading) {
        return <Loading></Loading>
    }
    // else {
    //     return data;
    // }

    // useEffect(() => {
    //     fetch("https://cctv-service-server.vercel.app/services")
    //         .then(res => res.json())
    //         .then(result => setServices(result))
    // }, [])
    return (
        <div className="mt-32 p-6">
            <div>
                <p className="text-2xl text-primary font-bold p-5">Available Service on {format(selectedDate, "PP")}</p>
                <p className="text-[#2878EB] text-3xl font-bold">S E R V I C E S</p>
                <h2 className="text-5xl font-bold mt-5">Our Excellent CCTV <br /> Security Services</h2>
            </div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 mt-10">
                {
                    services.map(service => <BookService
                        key={service._id}
                        service={service}
                        setSelectService={setSelectService}
                    ></BookService>)
                }
            </div>
            {
                selectService &&
                <BookingModal
                    selectedDate={selectedDate}
                    selectService={selectService}
                    refetch = {refetch}
                    setSelectService={setSelectService}
                ></BookingModal>}
        </div>
    );
};

export default BookServices;