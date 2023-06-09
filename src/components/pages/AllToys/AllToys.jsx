/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/control-has-associated-label */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link, useLoaderData } from 'react-router-dom';
import useTitleChange from '../../../hooks/useTitleChange';

const AllToys = () => {
    useTitleChange('All-Toys');
    const { results } = useLoaderData();
    const [toys, setToys] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(20);
    const totalPages = Math.ceil(results / itemsPerPage);
    const pageNumbers = [...Array(totalPages).keys()];
    const [loading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [clicked, setCliked] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const { data } = await axios.get(`https://toy-troppers-server.vercel.app/all-toys?page=${currentPage}&limit=${itemsPerPage}&searchQuery=${searchQuery}`);
                if (data.success) {
                    setToys(data.toys);
                    setIsLoading(false);
                }
            } catch (error) {
                setIsLoading(false);
                console.log(error);
                setIsError(true);
            }
        };
        fetchData();
    }, [searchQuery, clicked, currentPage, itemsPerPage]);

    // page option selection
    const options = [20, 40, 60, 80];
    const handleOptionChange = (e) => {
        setItemsPerPage(e.target.value);
        setCurrentPage(0);
    };

    // search
    const handleSubmit = (e) => {
        e.preventDefault();
        setCliked((ps) => !ps);
    };

    return (
        <div className="py-10">
            {toys.length === 0 && <span className="text-red-500 text-5xl text-center font-bold tracking-widest">Error occurred while fetching data.</span>}
            {toys.length > 0 && (
                <>
                    {' '}
                    <div className="flex justify-center md:justify-end pb-8">
                        <div className="form-control w-80">
                            <span className="footer-title text-primary">Search the Product Using the Toy Name</span>

                            <form onSubmit={handleSubmit} className="relative">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Iron Man"
                                    className="input input-bordered input-primary w-full pr-16"
                                />
                                <button type="submit" className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                                    Search Here
                                </button>
                            </form>
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
                            {loading || isError ? (
                                <>
                                    <div className="flex justify-center items-center w-full mx-auto my-16">
                                        {isError ? <span className="text-red-500">Error occurred while fetching data.</span> : <progress className="progress w-56" />}
                                    </div>
                                    :
                                </>
                            ) : (
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
                            )}
                        </table>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <div className="btn-group my-5 ">
                            {pageNumbers.map((number) => (
                                <button key={number} type="button" className={`btn ${number === currentPage ? 'btn-active' : ''}`} onClick={() => setCurrentPage(number)}>
                                    {number + 1}
                                </button>
                            ))}
                        </div>
                        <select value={itemsPerPage} onChange={handleOptionChange} className="select select-bordered w-32">
                            {options.map((option) => (
                                <option key={option}>{option}</option>
                            ))}
                        </select>
                    </div>
                </>
            )}
        </div>
    );
};

export default AllToys;
