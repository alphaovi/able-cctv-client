import React from 'react';
import normalImg from "../../../../img/carousel-1.jpg";
import { DayPicker } from 'react-day-picker';

const BookServiceDate = ({selectedDate, setSelectedDate}) => {
    
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={normalImg} className="max-w-sm rounded-lg shadow-2xl" alt="" />
                <div>
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    ></DayPicker>
                </div>
            </div>
        </div>
    );
};

export default BookServiceDate;