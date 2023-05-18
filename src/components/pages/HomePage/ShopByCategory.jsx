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
import ReactStars from 'react-rating-stars-component';

const ShopByCategory = () => {
    const [datas, setData] = useState([]);
    const [currentTab, setCurrentTab] = useState('1');
    const [value, setValue] = useState('Marvel');
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
            try {
                const { data } = await axios.get(`http://localhost:8080/all-toys?category=${value}`);
                if (data.success) {
                    setData(data.toys);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetChData();
    }, [value]);

    const handleTabClick = async (e) => {
        setCurrentTab(e.target.id);
        setValue(e.target.value);
    };
    console.log(datas);
    return (
        <div className="w-full mx-auto max-w-7xl space-y-5">
            <h1 className="text-4xl font-bold text-center py-4">Shop By Category</h1>
            <div className="tabs grid grid-cols-4 justify-items-center text-2xl font-bold">
                {tabs.map((tab, i) => (
                    <button key={i} id={tab.id} value={tab.tabTitle} disabled={currentTab === `${tab.id}`} onClick={handleTabClick}>
                        {tab.tabTitle}
                    </button>
                ))}
            </div>
            <div className="py-5">
                {tabs.map((tab, i) => (
                    <div key={i} className="grid grid-cols-3 w-full gap-7">
                        {currentTab === `${tab.id}` &&
                            datas.map((el) => (
                                <div key={el._id} className="p-4 sm:mb-0 mb-6">
                                    <div className="rounded-lg h-64 overflow-hidden">
                                        <img alt={el.name} className="object-cover object-center h-full w-full" src={el.pictureUrl} />
                                    </div>
                                    <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{el.name}</h2>
                                    <div className="flex justify-between items-center py-6">
                                        <h3 className="text-primary font-bold text-xl">Price: ${el.price}</h3>
                                        <ReactStars value={el.rating} size={28} isHalf emptyIcon={<BsStar />} halfIcon={<BsStarHalf />} fullIcon={<BsStarFill />} activeColor="#ffd700" />
                                    </div>
                                    <a className="text-indigo-500 inline-flex items-center mt-3">
                                        Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopByCategory;
/*

*/
