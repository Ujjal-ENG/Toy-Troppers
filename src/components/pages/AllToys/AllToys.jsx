/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/control-has-associated-label */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useTitleChange from '../../../hooks/useTitleChange';

const AllToys = () => {
    useTitleChange('All-Toys');
    const [toys, setToys] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`http://localhost:8080/all-toys?searchQuery=${searchQuery}`);
                if (data.success) {
                    setToys(data.toys);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [searchQuery]);

    return (
        <div className="py-10">
            <div className="flex justify-end pb-8">
                <div className="form-control w-80">
                    <span className="footer-title text-primary">Search the Product Using the Toy Name</span>

                    <div className="relative">
                        <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Iron Man" className="input input-bordered w-full pr-16" />
                        <button type="button" className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                            Search Here
                        </button>
                    </div>
                </div>
            </div>
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
