import { useEffect } from 'react';

const useTitleChange = (title) => {
    useEffect(() => {
        document.title = `TTroppers | ${title}`;
    }, [title]);
};

export default useTitleChange;
