/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

const SortByPrice = ({ handleSorts }) => {
    const [sortBy, setSortBy] = useState('');

    const handleSort = (sortOption) => {
        if (sortOption === sortBy) {
            setSortBy('');
        } else {
            setSortBy(sortOption);
        }
        handleSorts(sortOption);
    };

    return (
        <div className="flex items-center justify-end my-5">
            <span className="mr-2 text-xl font-bold tracking-widest">Sort By Price:</span>
            <button className={`${sortBy === 'asc' ? 'bg-primary' : 'bg-gray-300'} text-white font-semibold px-4 py-2 rounded-l-lg focus:outline-none`} onClick={() => handleSort('asc')}>
                Ascending
            </button>
            <button className={`${sortBy === 'desc' ? 'bg-primary' : 'bg-gray-300'} text-white font-semibold px-4 py-2 rounded-r-lg focus:outline-none`} onClick={() => handleSort('desc')}>
                Descending
            </button>
        </div>
    );
};

export default SortByPrice;
