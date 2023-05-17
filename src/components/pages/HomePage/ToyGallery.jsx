/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const ToyGallery = () => {
    return (
        <div className="my-24">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div
                        data-aos="fade-up"
                        data-aos-offset="100"
                        data-aos-delay="30"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center"
                        className="flex w-full mb-20 flex-wrap">
                        <h1 className="sm:text-3xl text-2xl title-font text-primary font-bold lg:w-1/3 lg:mb-0 mb-4">Master Cleanse Toy | Troppers Gallery</h1>
                        <p className="lg:pl-6 lg:w-2/3 tracking-wider mx-auto leading-relaxed text-base">
                            Welcome to our <span className="md:text-xl text-sm font-bold text-orange-600">Toy-Troppers Gallery!</span> Discover a captivating collection of toy photos that showcase the
                            magic and wonder of these playful companions. From action figures to superheroes, each photo tells a unique story, capturing the vibrant colors and intricate details of
                            these beloved toys. Let the photos inspire your imagination and relish in the joy they bring. Explore our Toy Gallery and embark on a visual journey filled with excitement,
                            creativity, and endless play possibilities.
                        </p>
                    </div>
                    <div className="flex flex-wrap md:-m-2 -m-1">
                        <div className="flex flex-wrap w-1/2">
                            <div data-aos="flip-up" className="md:p-2 p-1 w-1/2">
                                <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block"
                                    src="https://cdn.popcultcha.com.au/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/t/h/the_transformers-_the_movie_1986_-_dinobot_snarl_studio_series_leader_class_8.5_action_figure_1.png"
                                />
                            </div>
                            <div data-aos="flip-down" className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://www.madzombie.com.au/assets/full/HSF6879.png?20221109133853" />
                            </div>
                            <div data-aos="zoom-in" className="md:p-2 p-1 w-full">
                                <img
                                    alt="gallery"
                                    className="w-full h-full object-cover object-center block"
                                    src="https://preview.redd.it/the-heavy-infantry-paz-vizsla-figure-may-be-the-best-v0-2027dp58fro81.jpg?width=640&crop=smart&auto=webp&s=5fa71771db3e4fb154eaa347382b038ead3dd496"
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div data-aos="zoom-in-up" className="md:p-2 p-1 w-full">
                                <img
                                    alt="gallery"
                                    className="w-full h-full object-cover object-center block"
                                    src="https://i5.walmartimages.com/asr/5ee129f3-d0a0-4bba-9622-0702ffcc10d0.2f7cc00f45ee3197dd8184583b90df6a.png?odnHeight=580&odnWidth=580&odnBg=FFFFFF"
                                />
                            </div>
                            <div data-aos="zoom-in-down" className="md:p-2 p-1 w-1/2">
                                <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block"
                                    src="https://static.gamesmen.com.au/media/catalog/product/cache/43c1b9e48526c06c9c8010675100b71d/l/e/lego-marvel-avengers-movie-4--thanos-mech-armor_prod.jpg"
                                />
                            </div>
                            <div data-aos="zoom-in-right" className="md:p-2 p-1 w-1/2">
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
