/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent-props */
import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper';

const BannerSlider = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <Swiper
            spaceBetween={30}
            centeredSlides
            autoplay={{
                delay: 5000,
                disableOnInteraction: false
            }}
            pagination={{
                clickable: true
            }}
            navigation
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="my-6 rounded-xl">
            <SwiperSlide className=" border-2  rounded-xl">
                <div
                    className="hero min-h-[80vh]"
                    style={{
                        backgroundImage:
                            'url("https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/907068/optimus-prime_transformers_gallery_5f6e41ac47f89.jpg")',
                        borderRadius: 12,
                        objectFit: 'cover'
                    }}>
                    <div className="hero-overlay bg-opacity-10" />
                </div>
            </SwiperSlide>
            <SwiperSlide className=" border-2  rounded-xl">
                <div
                    className="hero min-h-[80vh]"
                    style={{
                        backgroundImage:
                            'url("https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/908284/hunter_star-wars_gallery_63d98284a4f3a.jpg")',
                        borderRadius: 12,
                        objectFit: 'cover'
                    }}>
                    <div className="hero-overlay bg-opacity-10" />
                </div>
            </SwiperSlide>
            <SwiperSlide className=" border-2  rounded-xl">
                <div
                    className="hero min-h-[80vh]"
                    style={{
                        backgroundImage: 'url("https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/912360/star-lord__gallery_646655cb44210.jpg")',
                        borderRadius: 12,
                        objectFit: 'cover'
                    }}>
                    <div className="hero-overlay bg-opacity-10" />
                </div>
            </SwiperSlide>
            <SwiperSlide className=" border-2  rounded-xl">
                <div
                    className="hero min-h-[80vh]"
                    style={{
                        backgroundImage:
                            'url("https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/9073381/megatron_transformers_gallery_5fbc0d933f414.jpg")',
                        borderRadius: 12,
                        objectFit: 'cover'
                    }}>
                    <div className="hero-overlay bg-opacity-10" />
                </div>
            </SwiperSlide>
            <SwiperSlide className=" border-2  rounded-xl">
                <div
                    className="hero min-h-[80vh]"
                    style={{
                        backgroundImage:
                            'url("https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/907068/optimus-prime_transformers_gallery_5f6e41ad07ccd.jpg")',
                        borderRadius: 12,
                        objectFit: 'cover'
                    }}>
                    <div className="hero-overlay bg-opacity-10" />
                </div>
            </SwiperSlide>
            <SwiperSlide className=" border-2  rounded-xl">
                <div
                    className="hero min-h-[80vh]"
                    style={{
                        backgroundImage:
                            'url("https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/9073381/megatron_transformers_gallery_5fbc0d9203d68.jpg")',
                        borderRadius: 12,
                        objectFit: 'cover'
                    }}>
                    <div className="hero-overlay bg-opacity-10" />
                </div>
            </SwiperSlide>
            <SwiperSlide className=" border-2  rounded-xl">
                <div
                    className="hero min-h-[80vh]"
                    style={{
                        backgroundImage:
                            'url("https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/9073381/megatron_transformers_gallery_5fbc0d92d9ee6.jpg")',
                        borderRadius: 12,
                        objectFit: 'cover'
                    }}>
                    <div className="hero-overlay bg-opacity-10" />
                </div>
            </SwiperSlide>
            <SwiperSlide className=" border-2  rounded-xl">
                <div
                    className="hero min-h-[80vh]"
                    style={{
                        backgroundImage:
                            'url("https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/904926/thor-sixth-scale-figure_marvel_gallery_5da4aa638dc81.jpg")',
                        borderRadius: 12,
                        objectFit: 'cover'
                    }}>
                    <div className="hero-overlay bg-opacity-10" />
                </div>
            </SwiperSlide>

            <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20" />
                </svg>
                <span ref={progressContent} />
            </div>
        </Swiper>
    );
};

export default BannerSlider;
