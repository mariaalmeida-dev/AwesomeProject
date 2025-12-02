import { useEffect, useState } from 'react';

import { fakePosts } from '../data/fakePosts';

export function useFeed() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setData(fakePosts);
            setLoading(false);
        }, 2000);
    }, []);

    return { loading, data };
}
