/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useForm } from 'react-hook-form';
import Lottie from 'react-lottie';
import animationData from '../../../assets/json/add-toy-register.json';

export default function AddToyPage() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Handle form submission logic here
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
                        <input type="text" id="pictureUrl" {...register('pictureUrl')} className="input input-bordered input-primary w-full" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-medium mb-2">
                            Name
                        </label>
                        <input type="text" id="name" {...register('name')} className="input input-bordered input-primary w-full" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="sellerName" className="block font-medium mb-2">
                            Seller Name
                        </label>
                        <input type="text" id="sellerName" {...register('sellerName')} className="input input-bordered input-primary w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="sellerEmail" className="block font-medium mb-2">
                            Seller Email
                        </label>
                        <input type="email" id="sellerEmail" {...register('sellerEmail')} className="input input-bordered input-primary w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="subCategory" className="block font-medium mb-2">
                            Sub-category
                        </label>
                        <select id="subCategory" {...register('subCategory')} className="input input-bordered input-primary w-full">
                            <option value="Marvel">Marvel</option>
                            <option value="Star Wars">Star Wars</option>
                            <option value="Transformers">Transformers</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block font-medium mb-2">
                            Price
                        </label>
                        <input type="number" id="price" {...register('price')} className="input input-bordered input-primary w-full" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="rating" className="block font-medium mb-2">
                            Rating
                        </label>
                        <input type="text" id="rating" {...register('rating')} className="input input-bordered input-primary w-full" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="quantity" className="block font-medium mb-2">
                            Available Quantity
                        </label>
                        <input type="number" id="quantity" {...register('quantity')} className="input input-bordered input-primary w-full" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block font-medium mb-2">
                            Detail Description
                        </label>
                        <textarea id="description" {...register('description')} className="input input-bordered input-primary w-full" rows={10} />
                    </div>
                    <div className="mt-8">
                        <button type="submit" className="btn btn-block btn-primary">
                            Add Toy
                        </button>
                    </div>
                </form>

                <div data-aos="fade-right">
                    <Lottie options={defaultOptions} height={600} width={500} />
                </div>
            </div>
        </>
    );
}
