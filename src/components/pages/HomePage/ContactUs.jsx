/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
import { BsCalendar2DateFill, BsFillTelephoneXFill } from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';

const ContactUs = () => {
    return (
        <div
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            className="md:h-[250px] h-[280px] bg-black rounded-xl w-full my-32 flex md:flex-row items-start gap-3 md:gap-0  md:py-8 py-2 flex-col justify-start md:justify-evenly md:items-center md:px-0 px-3">
            <div>
                <div className="flex items-center gap-4">
                    <BsCalendar2DateFill className="text-3xl md:text-5xl text-orange-600" />
                    <div>
                        <p className="text-white tracking-wider">We are open Monday-Friday</p>
                        <h1 className="text-white text-xl md:text-3xl font-bold tracking-wider">7:00 am - 9:00 pm</h1>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex items-center gap-4">
                    <BsFillTelephoneXFill className="text-3xl md:text-5xl text-orange-600" />
                    <div>
                        <p className="text-white tracking-wider">Have a Question?</p>
                        <h1 className="text-white text-xl md:text-3xl font-bold tracking-wider">+2546 251 2658</h1>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex items-center gap-4">
                    <ImLocation className="text-3xl md:text-5xl text-orange-600" />
                    <div>
                        <p className="text-white tracking-wider">Opinion or Complain? Our Address</p>
                        <h1 className="text-white text-xl md:text-3xl font-bold tracking-wider">Liza Street, New York.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
