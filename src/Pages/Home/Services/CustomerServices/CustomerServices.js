import React, { useState } from 'react';
import BookServiceDate from '../BookServiceDate/BookServiceDate';
import BookServices from '../BookServices/BookServices/BookServices';


const CustomerServices = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <BookServiceDate
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></BookServiceDate>
            <BookServices
                selectedDate={selectedDate}
            ></BookServices>
        </div>
    );
};

export default CustomerServices;