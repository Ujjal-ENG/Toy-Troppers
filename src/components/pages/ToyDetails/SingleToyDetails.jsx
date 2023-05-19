/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import ReactStars from 'react-rating-stars-component';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitleChange from '../../../hooks/useTitleChange';

const SingleToyDetails = () => {
    useTitleChange('Toy Details');
    const { toys } = useLoaderData();
    const [isFavorite, setIsFavorite] = useState(false);
    {
        isFavorite &&
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Items is Added In Favourite section and this Section comming soon.',
                showConfirmButton: false,
                // eslint-disable-next-line comma-dangle
                timer: 1500
            });
    }
    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt={toys?.name} className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={toys?.pictureUrl} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-xl title-font text-gray-500 font-bold  tracking-widest">{toys?.subCategory}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{toys?.name}</h1>
                            <div className="flex mb-4">
                                <span className="flex justify-center items-center">
                                    <ReactStars
                                        value={parseFloat(toys?.rating)}
                                        size={28}
                                        isHalf
                                        edit={false}
                                        emptyIcon={<BsStar />}
                                        halfIcon={<BsStarHalf />}
                                        fullIcon={<BsStarFill />}
                                        activeColor="#ffd700"
                                    />
                                    <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>

                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                        </svg>
                                    </a>
                                </span>
                            </div>
                            <div className="my-3 flex mt-6 gap-3 items-start pb-5 border-y-2 border-gray-200 mb-5 flex-col">
                                <span className="title-font font-medium text-2xl text-primary">Seller Information</span>

                                <span className="title-font font-medium text-xl text-black">Seller Name: {toys?.sellerName}</span>
                                <span className="title-font font-medium text-xl text-orange-500">Seller Email: {toys?.sellerEmail}</span>
                            </div>
                            <p className="leading-relaxed">{toys?.detailDescription}</p>
                            <div className="flex mt-6 gap-3 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div className="flex items-center ">
                                    <span className="mr-3">Color</span>
                                    <p className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
                                    <p className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
                                    <p className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
                                </div>
                                <span className="title-font font-medium text-2xl text-orange-600">AvailableQuantity: {toys?.availableQuantity}</span>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">${toys?.price}</span>
                                <Link to="/" type="button" className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                    Buy Now
                                </Link>
                                <button
                                    type="button"
                                    onClick={() => setIsFavorite(!isFavorite)}
                                    // eslint-disable-next-line react/jsx-indent-props
                                    className={`rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center ${isFavorite ? ' text-red-500' : 'text-gray-500'} ml-4`}
                                    disabled={!!isFavorite}>
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SingleToyDetails;
