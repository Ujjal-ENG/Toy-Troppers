/* eslint-disable comma-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

const ShopByCategory = () => {
    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Tab 1',
            title: 'Title 1',
            content: 'Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.'
        },
        {
            id: 2,
            tabTitle: 'Tab 2',
            title: 'Title 2',
            content: 'Contenido de tab 2.'
        },
        {
            id: 3,
            tabTitle: 'Tab 3',
            title: 'Title 3',
            content: 'Contenido de tab 3.'
        },
        {
            id: 4,
            tabTitle: 'Tab 4',
            title: 'Title 4',
            content: 'Contenido de tab 4.'
        }
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    };

    return (
        <div className="container">
            <div className="tabs grid grid-cols-4">
                {tabs.map((tab, i) => (
                    <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={handleTabClick}>
                        {tab.tabTitle}
                    </button>
                ))}
            </div>
            <div className="content">
                {tabs.map((tab, i) => (
                    <div key={i}>
                        {currentTab === `${tab.id}` && (
                            <div>
                                <p className="title">{tab.title}</p>
                                <p>{tab.content}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopByCategory;
