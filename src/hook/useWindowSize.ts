import { useState, useEffect } from 'react';

export default function useWindowSize() {
    const [size, setSize] = useState([0,0]);

    useEffect(() => {
        function updateSize() {
            setSize([window.innerHeight, window.innerWidth])
        }
        window.addEventListener('resize',updateSize);
        return () => window.removeEventListener('resize',updateSize);
    },[]);

    return size;
}