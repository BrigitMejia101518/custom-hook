import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function load() {
            try {
                setIsLoading(true);
                setError(null);
                const res = await fetch(url);
                if (!res.ok) throw new Error("Error en la peticion");
                setData(await res.json());
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }  
        }
        load();
    }, [url]);

    return { data, isLoading, error };
}

export {
    useFetch
};