import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../../Context/AuthProvider';

const BookingModal = ({ selectService, setSelectService, selectedDate, refetch }) => {
    const { name, serviceName, price } = selectService;
    const { user } = useContext(AuthContext);
    const date = format(selectedDate, "PP");

    const handleBookService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const services = {
            serviceName,
            date,
            customerName: name,
            email,
            phone,
            price
        }

        fetch("https://cctv-service-server.vercel.app/servicesBooking", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                console.log(services)
                if (data.acknowledged) {
                    setSelectService(null);
                    toast.success("You Just Successfully Booked The Service You Wanted");
                    refetch();
                }
                else {
                    toast.error(data.message)
                }

            })


    }
    return (
        <div>
            <input type="checkbox" id="book-service" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="book-service" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name} {serviceName}</h3>
                    <form onSubmit={handleBookService}>
                        <input type="text" value={date} className="input input-bordered mt-5 w-full" disabled />
                        <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered mt-5 w-full" required />
                        <input type="text" name="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered mt-5 w-full" disabled />
                        <input type="text" name="phone" placeholder="Enter Your Phone" className="input input-bordered mt-5 w-full" required />
                        <input className="btn btn-primary input input-bordered mt-5 w-full" type="submit" value="SUBMIT" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;