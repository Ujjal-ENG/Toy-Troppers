/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable comma-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

const ShopByCategory = () => {
    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Marvel',
            title: 'Title 1',
            content: 'Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.'
        },
        {
            id: 2,
            tabTitle: 'Star Wars',
            title: 'Title 2',
            content: 'Contenido de tab 2.'
        },
        {
            id: 3,
            tabTitle: 'Transformers',
            title: 'Title 3',
            content: 'Contenido de tab 3.'
        }
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    };

    return (
        <div className="w-full mx-auto max-w-7xl space-y-5">
            <h1 className="text-4xl font-bold text-center py-4">Shop By Category</h1>
            <div className="tabs grid grid-cols-4 justify-items-center text-2xl font-bold">
                {tabs.map((tab, i) => (
                    <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={handleTabClick}>
                        {tab.tabTitle}
                    </button>
                ))}
            </div>
            <div className="py-5">
                {tabs.map((tab, i) => (
                    <div key={i}>
                        {currentTab === `${tab.id}` && (
                            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                <div className="rounded-lg h-64 overflow-hidden">
                                    <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1205x505" />
                                </div>
                                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">The 400 Blows</h2>
                                <p className="text-base leading-relaxed mt-2">
                                    Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.
                                </p>
                                <a className="text-indigo-500 inline-flex items-center mt-3">
                                    Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopByCategory;
