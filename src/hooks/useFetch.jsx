import { useState, useEffect } from "react";


function useFetch(fileName) {
    const [data, setData] = useState([]);
    useEffect(()=> {
        fetch(fileName)
            .then((response) => {
                if (!response.ok) {
                    console.log('erreur dans la récupération des données');
                }
                return response.json();
            })
            .then((jsonData) => {
                setData(jsonData);
            })
            .catch((error) => {
                console.log('problème');
            });
        }, [fileName]);

        return {data};
};

export default useFetch;
