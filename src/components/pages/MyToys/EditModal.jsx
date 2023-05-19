/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-param-reassign */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../context/AuthProvider';

const EditModal = ({ id, handleUpdate }) => {
    const { userInfo } = useContext(AuthContext);
    const [loading, setIsLoading] = useState(false);
    const [loading2, setIsLoading2] = useState(false);
    const [updateData, setUpdateData] = useState({});
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset
    } = useForm();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const { data } = await axios.get(`https://toy-troppers-server.vercel.app/single-toys-details/${id && id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                if (data.success) {
                    setUpdateData(data.toys);
                    setIsLoading(false);
                    // Set default values using setValue after data has been fetched
                    setValue('pictureUrl', data.toys.pictureUrl);
                    setValue('name', data.toys.name);
                    setValue('sellerName', data.toys.sellerName);
                    setValue('subCategory', data.toys.subCategory);
                    setValue('price', data.toys.price);
                    setValue('rating', data.toys.rating);
                    setValue('availableQuantity', data.toys.availableQuantity);
                    setValue('description', data.toys.detailDescription);
                }
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    console.log('ID not found.');
                    // Handle the error when ID is not found
                } else {
                    console.log('An error occurred while fetching data:', error);
                    // Handle other types of errors
                }
            }
        };
        fetchData();
    }, [id, setValue]);

    const onSubmit = async (data) => {
        setIsLoading2(true);
        data.price = parseInt(data.price, 10);
        data.rating = parseFloat(data.rating);
        data.availableQuantity = parseInt(data.availableQuantity, 10);
        try {
            const response = await axios.patch(
                `https://toy-troppers-server.vercel.app/update-toys-details?id=${updateData._id}`,
                { data },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
            if (response.data.success) {
                setIsLoading2(false);
                handleUpdate(true);
                Swal.fire({
                    icon: 'success',
                    title: 'Toy Information is Successfully Updated!!',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            setIsLoading2(false);
            console.log(error);
        }
        reset(); // Reset the form after submission
    };
    if (loading2) {
        return (
            <div className="h-screen flex justify-center items-center">
                <progress className="progress w-56" />
            </div>
        );
    }

    return (
        <div>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-full max-w-5xl relative">
                    <h1 data-aos="fade-up" className="text-4xl font-bold tracking-widest text-center py-6 text-primary">
                        Update The Toy
                    </h1>
                    {loading ? (
                        <div className="h-screen flex justify-center items-center">
                            <progress className="progress w-56" />
                        </div>
                    ) : (
                        <div className="container mx-auto py-8 grid grid-cols-2">
                            <form data-aos="fade-left" onSubmit={handleSubmit(onSubmit)} className="col-span-2 max-w-2xl gap-5 grid grid-cols-2 w-full mx-auto">
                                <div className="mb-4">
                                    <label htmlFor="pictureUrl" className="block font-medium mb-2">
                                        Picture URL of the toy
                                    </label>
                                    <input
                                        type="text"
                                        id="pictureUrl"
                                        {...register('pictureUrl', { required: true })}
                                        className="input input-bordered input-primary w-full"
                                        required
                                        defaultValue={updateData?.pictureUrl}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="name" className="block font-medium mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        {...register('name', { required: true })}
                                        className="input input-bordered input-primary w-full"
                                        required
                                        defaultValue={updateData?.name}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="sellerName" className="block font-medium mb-2">
                                        Seller Name
                                    </label>
                                    <input
                                        type="text"
                                        id="sellerName"
                                        {...register('sellerName', { required: true })}
                                        className="input input-bordered input-primary w-full"
                                        defaultValue={updateData?.sellerName}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="sellerEmail" className="block font-medium mb-2">
                                        Seller Email
                                    </label>
                                    <input
                                        type="email"
                                        id="sellerEmail"
                                        {...register('sellerEmail', { required: true })}
                                        className="input input-bordered input-primary w-full"
                                        defaultValue={userInfo && userInfo.email ? userInfo.email : ''}
                                        readOnly
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="subCategory" className="block font-medium mb-2">
                                        Sub-category
                                    </label>
                                    <select
                                        id="subCategory"
                                        {...register('subCategory', { required: true })}
                                        className="input input-bordered input-primary w-full"
                                        defaultValue={updateData?.subCategory}>
                                        <option value="Marvel">Marvel</option>
                                        <option value="Star Wars">Star Wars</option>
                                        <option value="Transformers">Transformers</option>
                                    </select>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="price" className="block font-medium mb-2">
                                        Price
                                    </label>
                                    <input
                                        type="number"
                                        id="price"
                                        {...register('price', { required: true })}
                                        className="input input-bordered input-primary w-full"
                                        required
                                        defaultValue={updateData && updateData?.price}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="rating" className="block font-medium mb-2">
                                        Rating
                                    </label>
                                    <input
                                        type="number"
                                        id="rating"
                                        {...register('rating', { required: true })}
                                        step="0.01"
                                        min={1}
                                        max={5}
                                        className="input input-bordered input-primary w-full"
                                        required
                                        defaultValue={updateData?.rating}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="availableQuantity" className="block font-medium mb-2">
                                        Available Quantity
                                    </label>
                                    <input
                                        type="number"
                                        id="availableQuantity"
                                        {...register('availableQuantity', { required: true })}
                                        className="input input-bordered input-primary w-full"
                                        required
                                        defaultValue={updateData?.availableQuantity}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="description" className="block font-medium mb-2">
                                        Detail Description
                                    </label>
                                    <textarea
                                        id="description"
                                        {...register('description', { required: true })}
                                        className="input input-bordered input-primary w-full"
                                        rows={10}
                                        defaultValue={updateData?.detailDescription}
                                    />
                                </div>

                                <div className="mt-8">
                                    {loading ? (
                                        <button type="button" className="btn loading btn-block">
                                            loading
                                        </button>
                                    ) : (
                                        <button type="submit" className="btn btn-block btn-primary">
                                            Update Toy
                                        </button>
                                    )}
                                </div>
                            </form>

                            <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">
                                ✕
                            </label>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EditModal;
