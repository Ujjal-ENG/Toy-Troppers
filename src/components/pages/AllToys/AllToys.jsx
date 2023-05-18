/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link, useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const { toys } = useLoaderData();

    return (
        <div className="py-10">
            <div className="overflow-x-auto">
                <table className="table table-compact w-full text-center">
                    <thead>
                        <tr>
                            <th />
                            <th>Seller Name</th>
                            <th>Seller Email</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {toys &&
                            toys.map((toy, idx) => (
                                <tr key={toy._id}>
                                    <th>{idx + 1}</th>
                                    <td>{toy.sellerName || 'Not Available'}</td>
                                    <td>{toy.sellerEmail || 'Not Available'}</td>
                                    <td>{toy.name || 'Not Available'}</td>
                                    <td>{toy.subCategory || 'Not Available'}</td>
                                    <td>${toy.price || 0}</td>
                                    <td>{toy.availableQuantity || 0}</td>
                                    <td>
                                        <Link to={`toy-details/${toy._id}`} className="btn btn-primary  inline-flex gap-3 btn-sm text-sm font-bold items-center mt-3">
                                            View Details
                                            <FiArrowRight className="text-xl font-bold" />
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;
