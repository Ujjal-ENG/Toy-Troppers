/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Geek = () => {
    return (
        <div
            data-aos="fade-up"
            data-aos-offset="-500"
            data-aos-delay="30"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            className="grid grid-cols-3 justify-items-center">
            <div className="col-span-1 mt-32 space-y-5">
                <h1 className="text-4xl font-bold uppercase tracking-wider">Upcoming Events</h1>
                <p className="mb-4">When you create a Toy|Troppers account, receive invitations to exclusive IRL and online events.</p>
                <Link to="/login" className="btn bg-orange-600 transition-all duration-150 ease-in-out hover:btn-primary btn-wide border-none">
                    Sign In
                </Link>
                <div className="p-4 w-full">
                    <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <img
                            alt="team"
                            className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                            src="https://www.sideshow.com/cdn-cgi/image/height=250,quality=80,f=auto/https://www.sideshow.com/wp/wp-content/uploads/2022/06/1200x900-SideshowCon-LandingPage-Feature-1.jpg"
                        />
                        <div className="flex-grow sm:pl-8">
                            <h2 className="title-font font-medium text-lg text-gray-900">Toy | Troppers Coming</h2>
                            <h3 className="text-gray-500 mb-3">Jul 18 - 21 2023</h3>
                            <p className="mb-4">UpComing</p>
                        </div>
                    </div>
                </div>
                <div className="p-4 w-full">
                    <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <img
                            alt="team"
                            className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                            src="https://www.sideshow.com/cdn-cgi/image/height=250,quality=80,f=auto/https://www.sideshow.com/wp/wp-content/uploads/2023/05/1200x900-Backtothe80s-LandingPage-Feature.jpg"
                        />
                        <div className="flex-grow sm:pl-8">
                            <h2 className="title-font font-medium text-lg text-gray-900">Toy | Troppers Coming</h2>
                            <h3 className="text-gray-500 mb-3">May 23 - 24 2023</h3>
                            <p className="mb-4">UpComing</p>
                        </div>
                    </div>
                </div>
            </div>
            <section className="text-gray-600 body-font col-span-2">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col">
                        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Space The Final Frontier</h1>
                            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                                Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap  sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div className="p-4 md:w-2/4">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img
                                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                                    src="https://www.sideshow.com/cdn-cgi/image/height=400,quality=80,f=auto/https://www.sideshow.com/wp/wp-content/uploads/2023/05/War-Machine-Origins-Sixth-Scale-Figure-by-Hot-Toys-First-Look-740x416.jpg"
                                    alt="blog"
                                />
                                <div className="p-6">
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">First Look: Origins War Machine 1:6 Figure by Hot Toys...</h1>
                                    <p className="leading-relaxed mb-3">Ahead of the worldwide release, the newest FIRST LOOK video shows a full unboxing of the Origins War...</p>
                                    <div className="flex items-center flex-wrap">
                                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                                            Learn More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14" />
                                                <path d="M12 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                <circle cx="12" cy="12" r="3" />
                                            </svg>
                                            1.2K
                                        </span>
                                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                            </svg>
                                            6
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-2/4">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img
                                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                                    src="https://www.sideshow.com/cdn-cgi/image/height=400,quality=80,f=auto/https://www.sideshow.com/wp/wp-content/uploads/2023/05/Spider-Punk-740x298.jpg"
                                    alt="blog"
                                />
                                <div className="p-6">
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Spider-Man: Across the Spider-Verse New...</h1>
                                    <p className="leading-relaxed mb-3">Before you see Spider-Man: Across the Spider-Verse, get a break down of all the new characters, including a...</p>
                                    <div className="flex items-center flex-wrap">
                                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                                            Learn More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14" />
                                                <path d="M12 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                <circle cx="12" cy="12" r="3" />
                                            </svg>
                                            1.8K
                                        </span>
                                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                            </svg>
                                            9
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Geek;
