import { useEffect } from 'react';

const useTitleChange = (title) => {
    useEffect(() => {
        document.title = `T-Troppers | ${title}`;
    }, [title]);
};

export default useTitleChange;
