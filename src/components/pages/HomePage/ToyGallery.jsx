/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const ToyGallery = () => {
    return (
        <div className="mb-14">
            <section className="text-gray-600 body-font">
                <div className="container px-5 pb-32 mx-auto flex flex-wrap">
                    <div data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-center" className="flex w-full my-20 flex-wrap">
                        <h1 className="sm:text-3xl text-2xl title-font text-primary font-bold lg:w-1/3 lg:mb-0 mb-4">Master Cleanse Toy | Troppers Gallery</h1>
                        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
                            Welcome to our <span className="md:text-xl text-sm font-bold text-orange-600">Toy-Troppers Gallery!</span> Discover a captivating collection of toy photos that showcase the
                            magic and wonder of these playful companions. From action figures to superheroes, each photo tells a unique story, capturing the vibrant colors and intricate details of
                            these beloved toys. Let the photos inspire your imagination and relish in the joy they bring. Explore our Toy Gallery and embark on a visual journey filled with excitement,
                            creativity, and endless play possibilities.
                        </p>
                    </div>
                    <div className="flex flex-wrap md:-m-2 -m-1">
                        <div className="flex flex-wrap w-1/2">
                            <div
                                data-aos="flip-up"
                                data-aos-offset="-500"
                                data-aos-delay="30"
                                data-aos-duration="500"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                data-aos-anchor-placement="top-center"
                                className="md:p-2 p-1 w-1/2">
                                <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block"
                                    src="https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/904926/thor-sixth-scale-figure_marvel_silo.png"
                                />
                            </div>
                            <div
                                data-aos="flip-down"
                                data-aos-offset="-500"
                                data-aos-delay="30"
                                data-aos-duration="500"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                data-aos-anchor-placement="top-center"
                                className="md:p-2 p-1 w-1/2">
                                <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block"
                                    src="https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/904311/captain-marvel-deluxe-version_marvel_silo.png"
                                />
                            </div>
                            <div
                                data-aos="zoom-in"
                                data-aos-offset="-500"
                                data-aos-delay="30"
                                data-aos-duration="500"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                data-aos-anchor-placement="top-center"
                                className="md:p-2 p-1 w-full">
                                <img
                                    alt="gallery"
                                    className="w-full h-full object-cover object-center block"
                                    src="https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/904929/captain-america-2012-version_marvel_gallery_63dd4f2d36110.jpg"
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div
                                data-aos="zoom-in-up"
                                data-aos-offset="-500"
                                data-aos-delay="30"
                                data-aos-duration="500"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                data-aos-anchor-placement="top-center"
                                className="md:p-2 p-1 w-full">
                                <img
                                    alt="gallery"
                                    className="w-full h-full object-cover object-center block"
                                    src="https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/908289/the-mandalorian-and-grogu-deluxe-version_star-wars_gallery_63f79e5b31aca.jpg"
                                />
                            </div>
                            <div
                                data-aos="zoom-in-down"
                                data-aos-offset="-500"
                                data-aos-delay="30"
                                data-aos-duration="500"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                data-aos-anchor-placement="top-center"
                                className="md:p-2 p-1 w-1/2">
                                <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block"
                                    src="https://static.gamesmen.com.au/media/catalog/product/cache/43c1b9e48526c06c9c8010675100b71d/l/e/lego-marvel-avengers-movie-4--thanos-mech-armor_prod.jpg"
                                />
                            </div>
                            <div
                                data-aos="zoom-in-right"
                                data-aos-offset="-500"
                                data-aos-delay="30"
                                data-aos-duration="500"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                data-aos-anchor-placement="top-center"
                                className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://shreepng.com/img/Inside/SuperheroAndVillain/Thanos/villain%20thanos.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ToyGallery;
