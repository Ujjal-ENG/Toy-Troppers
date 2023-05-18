/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import Lottie from 'react-lottie';
import Swal from 'sweetalert2';
import animationData from '../../../assets/json/add-toy-register.json';
import { AuthContext } from '../../../context/AuthProvider';

export default function AddToyPage() {
    const { userInfo } = useContext(AuthContext);
    const [loading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        setIsLoading(true);
        data.addedUser = userInfo.email;
        try {
            const response = await axios.post('http://localhost:8080/add-toys', { data });
            if (response?.data?.success) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your Toy Data has been saved!!',
                    showConfirmButton: false,
                    timer: 1500
                });
                setIsLoading(false);
            }
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    };

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <>
            <h1 data-aos="fade-up" className="text-4xl font-bold tracking-widest text-center py-6 text-primary">
                Add a New Toy
            </h1>
            <div className="container mx-auto py-8 grid grid-cols-3">
                <form data-aos="fade-left" onSubmit={handleSubmit(onSubmit)} className="col-span-2 max-w-2xl gap-5 grid grid-cols-2 w-full mx-auto">
                    <div className="mb-4">
                        <label htmlFor="pictureUrl" className="block font-medium mb-2">
                            Picture URL of the toy
                        </label>
                        <input type="text" id="pictureUrl" {...register('pictureUrl', { required: true })} className="input input-bordered input-primary w-full" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-medium mb-2">
                            Name
                        </label>
                        <input type="text" id="name" {...register('name', { required: true })} className="input input-bordered input-primary w-full" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="sellerName" className="block font-medium mb-2">
                            Seller Name
                        </label>
                        <input type="text" id="sellerName" {...register('sellerName', { required: true })} className="input input-bordered input-primary w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="sellerEmail" className="block font-medium mb-2">
                            Seller Email
                        </label>
                        <input type="email" id="sellerEmail" {...register('sellerEmail', { required: true })} className="input input-bordered input-primary w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="subCategory" className="block font-medium mb-2">
                            Sub-category
                        </label>
                        <select id="subCategory" {...register('subCategory', { required: true })} className="input input-bordered input-primary w-full">
                            <option value="Marvel">Marvel</option>
                            <option value="Star Wars">Star Wars</option>
                            <option value="Transformers">Transformers</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block font-medium mb-2">
                            Price
                        </label>
                        <input type="number" id="price" {...register('price', { required: true })} className="input input-bordered input-primary w-full" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="rating" className="block font-medium mb-2">
                            Rating
                        </label>
                        <input type="text" id="rating" {...register('rating', { required: true })} className="input input-bordered input-primary w-full" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="quantity" className="block font-medium mb-2">
                            Available Quantity
                        </label>
                        <input type="number" id="quantity" {...register('quantity', { required: true })} className="input input-bordered input-primary w-full" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block font-medium mb-2">
                            Detail Description
                        </label>
                        <textarea id="description" {...register('description', { required: true })} className="input input-bordered input-primary w-full" rows={10} />
                    </div>
                    <div className="mt-8">
                        {loading ? (
                            <button type="button" className="btn loading btn-block">
                                loading
                            </button>
                        ) : (
                            <button type="submit" className="btn btn-block btn-primary">
                                Add Toy
                            </button>
                        )}
                    </div>
                </form>

                <div data-aos="fade-right">
                    <Lottie options={defaultOptions} height={600} width={500} />
                </div>
            </div>
        </>
    );
}
