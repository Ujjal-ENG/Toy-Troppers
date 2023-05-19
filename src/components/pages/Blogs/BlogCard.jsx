/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-indent */
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaClock, FaUser } from 'react-icons/fa';
import LazyLoad from 'react-lazyload';

function BlogCard({ data }) {
    const { img, question, answer, author } = data;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="flex flex-col">
                <div className="md:flex-shrink-0">
                    <LazyLoad>
                        <img className="h-full w-full max-h-72 object-cover " src={img} alt={question} />
                    </LazyLoad>
                </div>
                <div className="p-8">
                    <h2 className="block mt-1 text-lg leading-tight font-medium text-black">{question}</h2>
                    <p className="mt-2 text-gray-500 ">{isOpen ? answer : `${answer.slice(0, 200)}...`}</p>
                    <button type="button" className="btn btn-xs duration-200 transition-all ease-in-out" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? 'Read Less' : 'Read More'}
                    </button>
                    <div className="mt-4 flex items-center ">
                        <FaUser className="mr-2" />
                        <div className="text-sm font-medium text-gray-900">{author}</div>
                        <FaClock className="ml-auto animate-bounce" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default BlogCard;
