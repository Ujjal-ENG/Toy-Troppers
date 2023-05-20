/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable operator-linebreak */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable comma-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiArrowRight } from 'react-icons/fi';
import LazyLoad from 'react-lazyload';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const ShopByCategory = () => {
    const [datas, setData] = useState([]);
    const [currentTab, setCurrentTab] = useState('1');
    const [value, setValue] = useState('Marvel');
    const [loading, setLoading] = useState(false);
    const tabs = [
        {
            id: 1,
            tabTitle: 'Marvel'
        },
        {
            id: 2,
            tabTitle: 'Star Wars'
        },
        {
            id: 3,
            tabTitle: 'Transformers'
        }
    ];

    // get the toys
    useEffect(() => {
        const fetChData = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(`https://toy-troppers-server.vercel.app/all-toys?category=${value}`);
                if (data.success) {
                    setData(data.toys);
                    setLoading(false);
                }
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };
        fetChData();
    }, [value]);

    const handleTabClick = async (e) => {
        setCurrentTab(e.target.id);
        setValue(e.target.value);
    };
    if (loading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <progress className="progress w-56" />
            </div>
        );
    }
    return (
        <div className="w-full mx-auto max-w-7xl space-y-5 my-14">
            <h1 className="text-4xl font-bold text-center py-4">Shop By Categories</h1>
            <div className="tabs grid grid-cols-1 md:grid-cols-4  justify-items-center text-2xl font-bold">
                {tabs.map((tab, i) => (
                    <button key={i} id={tab.id} value={tab.tabTitle} disabled={currentTab === `${tab.id}`} onClick={handleTabClick}>
                        {tab.tabTitle}
                    </button>
                ))}
            </div>
            <div className="py-5">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50
                        }
                    }}
                    modules={[Pagination]}
                    watchSlidesProgress
                    className="max-w-6xl w-full text-center mx-auto">
                    {tabs.map((tab, i) => (
                        <div key={i} className="grid grid-cols-3 w-full gap-7 py-3">
                            {currentTab === `${tab.id}` &&
                                datas.map((el) => (
                                    <SwiperSlide key={el._id} className="p-4 sm:mb-0 mb-6">
                                        <div className="rounded-lg h-64 overflow-hidden">
                                            <LazyLoad once>
                                                <img alt={el.name} className="object-cover object-center h-full w-full" src={el.pictureUrl} />
                                            </LazyLoad>
                                        </div>
                                        <h2 className="text-xl  line-clamp-1 font-medium title-font text-gray-900 mt-5">{el.name}</h2>
                                        <div className="flex justify-between items-center py-6 gap-3">
                                            <h3 className="text-primary font-bold text-xl">Price: ${el.price}</h3>
                                            <ReactStars
                                                value={parseFloat(el.rating)}
                                                size={28}
                                                isHalf
                                                edit={false}
                                                emptyIcon={<BsStar />}
                                                halfIcon={<BsStarHalf />}
                                                fullIcon={<BsStarFill />}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <Link to={`single-toy-details/${el._id}`} state={el} className="btn btn-primary btn-block inline-flex gap-3 text-xl font-bold items-center mt-3">
                                            View Details
                                            <FiArrowRight className="text-3xl font-bold" />
                                        </Link>
                                    </SwiperSlide>
                                ))}
                        </div>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ShopByCategory;
/*

*/
