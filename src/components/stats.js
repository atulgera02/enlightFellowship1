import React, {useMemo} from 'react';
import Completions from "./completions.json";
function Stats() {
    const data = useMemo(() => Completions,[])
    // const [data,setData] = useState([]);
    // const [isLoading,setIsLoading] = useState(false);
    // const [error, setError] = useState(null);

    // useEffect(() =>{
    //         fetch("https://enlight.nyc/completions.json")
            
    //             .then((response) => response.json())
    //             .then(
    //                 (data) => {
    //                     setData(data.completions);
    //                     setIsLoading(true);
    //                 },

    //                 (error) => {
    //                     setIsLoading(true);
    //                     setError(error);
    //                 }
    //             )   
    // },[])

    // if (error) {
    //     return <div>Error: {error.message}</div>;
    //   } else if (!isLoading) {
    //     return <div>Loading...</div>;
    //   } else {
      
        return (
          <div className="border-b-4 border-t-0 border-blue-600 p-4">
            <h1 className="text-2xl playfair text-black-600">
            <b>Here are some additional stats!</b>
            </h1>
            <p className="text-xl text-gray-700 py-2">
            Average # of milestones completed per cohort member: <b>{data.completions.reduce((a,v) => a=a+v.milestones.length , 0) / data.completions.length}</b>.
            </p>
            <p className="text-xl text-gray-700 py-2">
            Overall Project-3 completion rate: <b>{(data.completions.map(item => (item.milestones.reduce((prev,current) => (prev.datetime > current.datetime) ? prev : current)).id)).filter(word => word==="project-3").length *10} %</b>.
            </p>
          </div>
        );
      }
//}

export default Stats;