/* eslint-disable react/jsx-indent-props */
import React from 'react';
import LazyLoad from 'react-lazyload';

const CollectAll = () => {
    return (
        <>
            <h1 data-aos="fade-up" className="text-5xl font-extrabold tracking-widest text-center py-9 uppercase">
                Collect It All
            </h1>
            <div data-aos="zoom-in-up" className="grid grid-cols-1 my-8 justify-items-center gap-3 md:grid-cols-4">
                <div className="lg:max-w-lg relative lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <LazyLoad once>
                        <img
                            className="object-cover object-center rounded"
                            alt="hero"
                            src="https://sideshow-prod-media.s3.amazonaws.com/ss/media/home-cards/499499661-hp-tf-01-909935_superboy_statue.jpg"
                        />
                    </LazyLoad>
                    <h1 className="text-5xl absolute font-extrabold px-2 text-white bottom-14 tracking-widest uppercase">Now Shipping</h1>
                    <button type="button" className="btn absolute btn-xs  left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:btn-sm md:btn-md lg:btn-lg hover:bg-orange-500 border-none">
                        Order Now
                    </button>
                </div>
                <div className="lg:max-w-lg lg:w-full relative md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <LazyLoad once>
                        <img
                            className="object-cover object-center rounded"
                            alt="hero"
                            src="https://sideshow-prod-media.s3.amazonaws.com/ss/media/home-cards/499499690-hp-tf-02-912013_she-hulk_figure.jpg"
                        />
                    </LazyLoad>
                    <h1 className="text-5xl absolute font-extrabold px-2 text-white bottom-14 tracking-widest uppercase">Hot Toys</h1>
                    <button type="button" className="btn absolute btn-xs  left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:btn-sm md:btn-md lg:btn-lg hover:bg-orange-500 border-none">
                        Order Today
                    </button>
                </div>
                <div className="lg:max-w-lg relative lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <LazyLoad once>
                        <img
                            className="object-cover object-center rounded"
                            alt="hero"
                            src="https://sideshow-prod-media.s3.amazonaws.com/ss/media/home-cards/499499606-hp-tf-03-200572_phoenixandjeangrey_maquette.jpg"
                        />
                    </LazyLoad>

                    <h1 className="text-5xl absolute font-extrabold px-2 text-white bottom-14 tracking-widest uppercase">Last Chance</h1>
                    <button type="button" className="btn absolute btn-xs  left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:btn-sm md:btn-md lg:btn-lg hover:bg-orange-500 border-none">
                        Order Today
                    </button>
                </div>

                <div className="lg:max-w-lg relative lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <LazyLoad once>
                        <img
                            className="object-cover object-center rounded"
                            alt="hero"
                            src="https://sideshow-prod-media.s3.amazonaws.com/ss/media/home-cards/499499772-hp-tf-04-300829_bobafett_pf.jpg"
                        />
                    </LazyLoad>

                    <h1 className="text-5xl absolute font-extrabold px-2 text-white bottom-14 tracking-widest uppercase">Rust a Simple Man</h1>
                    <button type="button" className="btn absolute btn-xs  left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:btn-sm md:btn-md lg:btn-lg hover:bg-orange-500 border-none">
                        Get Fett
                    </button>
                </div>
            </div>
        </>
    );
};

export default CollectAll;
