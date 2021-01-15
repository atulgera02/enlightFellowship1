import React, { useState, useEffect } from 'react';


function Data() {

    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() =>{
            fetch("https://enlight.nyc/completions.json")
            
                .then((response) => response.json())
                .then(
                    (data) => {
                        setData(data.completions);
                        setIsLoading(true);
                    },

                    (error) => {
                        setIsLoading(true);
                        setError(error);
                    }
                )   
    },[])

    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoading) {
        return <div>Loading...</div>;
      } else {
          return data;
      }
    }
export default Data;