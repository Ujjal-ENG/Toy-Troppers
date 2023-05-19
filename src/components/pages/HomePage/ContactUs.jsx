/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
import { BsCalendar2DateFill, BsFillTelephoneXFill } from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';

const ContactUs = () => {
    return (
        <div
            data-aos="fade-up"
            data-aos-offset="-500"
            data-aos-delay="30"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            className="h-[250px] bg-black rounded-xl w-full my-32 flex justify-evenly items-center">
            <div>
                <div className="flex items-center gap-4">
                    <BsCalendar2DateFill className="text-5xl text-orange-600" />
                    <div>
                        <p className="text-white tracking-wider">We are open Monday-Friday</p>
                        <h1 className="text-white text-3xl font-bold tracking-wider">7:00 am - 9:00 pm</h1>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex items-center gap-4">
                    <BsFillTelephoneXFill className="text-5xl text-orange-600" />
                    <div>
                        <p className="text-white tracking-wider">Have a Question?</p>
                        <h1 className="text-white text-3xl font-bold tracking-wider">+2546 251 2658</h1>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex items-center gap-4">
                    <ImLocation className="text-5xl text-orange-600" />
                    <div>
                        <p className="text-white tracking-wider">Opinion or Complain? Our Address</p>
                        <h1 className="text-white text-3xl font-bold tracking-wider">Liza Street, New York.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
