import React, { useState, useEffect } from 'react';

function Table() {

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
        
          return(
            <div className="border-b-4 border-t-4 border-blue-600 p-4 text-lg">
              <table className="m-auto">
                <thead>
                  <tr className="p-4 divide-x divide-green-500 divide-dashed">
                    <th className="p-4">Name</th>
                    <th className="p-4">Username</th>
                    <th className="p-4">Completion Rate</th>
                    <th className="p-4">Last Milestone</th>
                    <th className="p-4">Link to Milestone</th>
                    <th className="p-4">Last Milestone Date/Time</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(item=> (
                    <tr className="p-4 divide-y divide-green-500 divide-dashed divide-x divide-green-500 divide-dashed" key={item.name}>
                      <td>{item.name}</td>
                      <td>{item.username}</td>
                      <td>{(parseFloat((item.milestones.length/9*100).toFixed(2)))} %</td>
                      <td>{ (item.milestones.reduce((prev,current) => (prev.datetime > current.datetime) ? prev : current)).milestone}</td>
                      <td><a className="text-blue-600" target="_blank" rel="noreferrer" href={(item.milestones.reduce((prev,current) => (prev.datetime > current.datetime) ? prev : current)).demo} > 
                          Demo 
                          </a>
                      </td>
                      <td>{Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(((item.milestones.reduce((prev,current) => (prev.datetime > current.datetime) ? prev : current)).datetime))}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
      }
      

export default Table;