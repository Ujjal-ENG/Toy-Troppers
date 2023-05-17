import { useEffect } from 'react';

const useTitleChange = (title) => {
    useEffect(() => {
        document.title = `Toy-Troppers | ${title}`;
    }, [title]);
};

export default useTitleChange;
