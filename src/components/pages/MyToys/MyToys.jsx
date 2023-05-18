/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable operator-linebreak */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/control-has-associated-label */
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { AuthContext } from '../../../context/AuthProvider';
import useTitleChange from '../../../hooks/useTitleChange';

const MyToys = () => {
    useTitleChange('My-Toys');

    const { userInfo } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`http://localhost:8080/my-toys?sellerEmail=${userInfo?.email}`);
                if (data.success) {
                    setToys(data.toys);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const handleEdit = (id) => {
        console.log(id);
    };
    const handleDelete = (id) => {
        console.log(id);
    };

    return (
        <div>
            <div className="overflow-x-auto w-full   my-10">
                <table className="table w-full text-center">
                    {/* head */}
                    <thead>
                        <tr>
                            <th />
                            <th>Toy Information</th>
                            <th>Seller Information</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {toys &&
                            toys.map((toy, idx) => (
                                <tr key={toy?._id}>
                                    <th>{idx + 1}</th>
                                    <td>
                                        <div className="flex items-center justify-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={toy?.pictureUrl} alt={toy?.name} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="">
                                                    Name: <span className="font-bold text-orange-600">{toy?.name}</span>
                                                </div>
                                                <div className="">
                                                    AVAILABLE QUANTITY: <span className="font-bold text-orange-600">{toy?.availableQuantity}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="font-bold text-xl text-orange-500">{toy?.sellerName}</span>
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{toy?.sellerEmail}</span>
                                    </td>
                                    <td className="text-xl font-bold">${toy?.price}</td>
                                    <td className="truncate line-clamp-10 max-w-[150px] ">{toy?.detailDescription}</td>
                                    <th>
                                        <button type="button" className="btn btn-ghost btn-md" onClick={() => handleEdit(toy._id)}>
                                            <BiEdit className="text-3xl text-orange-500" />
                                        </button>
                                        <button type="button" className="btn btn-ghost btn-md" onClick={() => handleDelete(toy._id)}>
                                            <AiFillDelete className="text-3xl text-red-500" />
                                        </button>
                                    </th>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;
