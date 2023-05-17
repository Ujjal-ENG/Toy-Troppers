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
                delay: 3500,
                disableOnInteraction: false
            }}
            pagination={{
                clickable: true
            }}
            navigation
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="my-6">
            <SwiperSlide className=" border-2  rounded-lg">
                <div
                    className="hero min-h-[80vh]"
                    style={{
                        backgroundImage:
                            'url("https://ae01.alicdn.com/kf/HTB1azz.DASWBuNjSszdq6zeSpXay/6pcs-set-Marvel-Avengers-Infinity-War-Thanos-Ironman-Spiderman-Captain-American-Hulk-Black-Panther-PVC-Figure.jpg_Q90.jpg_.webp")',
                        borderRadius: 10,
                        objectFit: 'cover'
                    }}>
                    <div className="hero-overlay bg-opacity-10" />
                </div>
            </SwiperSlide>
            <SwiperSlide className=" border-2  rounded-lg">
                <div
                    className="hero min-h-[80vh]"
                    style={{
                        backgroundImage: 'url("https://m.media-amazon.com/images/I/410DjEeijwS.jpg")',
                        borderRadius: 10,
                        objectFit: 'cover'
                    }}>
                    <div className="hero-overlay bg-opacity-10" />
                </div>
            </SwiperSlide>
            <SwiperSlide className=" border-2  rounded-lg">
                <div
                    className="hero min-h-[80vh]"
                    style={{
                        backgroundImage:
                            'url("https://w7.pngwing.com/pngs/462/760/png-transparent-lego-star-wars-toy-monster-musume-lego-monster-fighters-nichijou-photography-cartoon-fictional-character.png")',
                        borderRadius: 10,
                        objectFit: 'cover'
                    }}>
                    <div className="hero-overlay bg-opacity-10" />
                </div>
            </SwiperSlide>
            <SwiperSlide className=" border-2  rounded-lg">
                <div
                    className="hero min-h-[80vh]"
                    style={{
                        backgroundImage:
                            'url("https://shop.hasbro.com/_next/image?url=https%3A%2F%2Fwww.hasbro.com%2Fcommon%2Fproductimages%2Fen_CA%2FFAF9A3BB99684973AD82740A15FD720F%2Fe4b2a5ad2eb010f0c7a1eb6d010e198b1e80a905.jpg&w=3840&q=75")',
                        borderRadius: 10,
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
