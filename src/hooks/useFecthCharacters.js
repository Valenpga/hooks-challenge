import { useState, useEffect } from "react"; 

function useCustomHook (apiURL)  {
    const [data, setData] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(apiURL);
                if(!response.ok)
                    throw new Error ('No encuentra imformacion');

                const fetchData = response.json();
                setData(fetchData);

            } catch (error) {
                console.error('Datos no encontrados',error);
            } 
            //const fetchData = response.json();
           //setData();
        }
        fetchData();
    }, [apiURL])
    return data;
}
export default useCustomHook;
