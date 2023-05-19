/* eslint-disable no-plusplus */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
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
import Swal from 'sweetalert2';
import { AuthContext } from '../../../context/AuthProvider';
import useTitleChange from '../../../hooks/useTitleChange';
import EditModal from './EditModal';
import SortByPrice from './SortByPrice';

const MyToys = () => {
    useTitleChange('My-Toys');
    const { userInfo } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [editData, setEditData] = useState(null);
    const [update, setUpdate] = useState(false);
    const [sortBy, setSortBy] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`http://localhost:8080/my-toys?sellerEmail=${userInfo?.email}&sortBy=${sortBy}`);
                if (data.success) {
                    setToys(data.toys);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [update, sortBy]);

    const handleEdit = (id) => {
        // console.log(id);
        setEditData(id);
    };
    const handleDelete = (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });

        swalWithBootstrapButtons
            .fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
            })
            .then(async (result) => {
                if (result.isConfirmed) {
                    // Delete the file
                    try {
                        const response = await axios.delete(`http://localhost:8080/delete-toys-details?id=${id}`);
                        if (response.data.success) {
                            swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success');
                            setUpdate(!update);
                        }
                    } catch (error) {
                        console.log(error);
                    }
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
                }
            });
    };
    const handleUpdate = (data) => {
        setUpdate((ps) => ({ ...ps, ...data }));
    };
    const handleSort = (data) => {
        setSortBy(data);
    };
    let count = 1;
    return (
        <div>
            <SortByPrice onSort="asc" handleSorts={handleSort} />
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
                            toys.map((toy) => (
                                <tr key={toy?._id}>
                                    <th>{count++}</th>
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
                                                    SubCategory: <span className="font-bold text-orange-600">{toy?.subCategory}</span>
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
                                        <label htmlFor="my-modal-5" type="button" className="btn btn-ghost btn-md" onClick={() => handleEdit(toy._id)}>
                                            <BiEdit className="text-3xl text-orange-500" />
                                        </label>
                                        <button type="button" className="btn btn-ghost btn-md" onClick={() => handleDelete(toy._id)}>
                                            <AiFillDelete className="text-3xl text-red-500" />
                                        </button>
                                    </th>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            <EditModal id={editData} handleUpdate={handleUpdate} />
        </div>
    );
};

export default MyToys;
