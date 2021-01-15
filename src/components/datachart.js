import React from 'react';
import {Bar} from 'react-chartjs-2';

const state = {
  labels: ['Kickoff', 'Set-Up', 'Web-Dev-Fun',
   'Project-1', 'JS-Fun', "APIs", "Project-2", "Databases", "Project-3"],
  datasets: [
    {
      label: 'Completed',
      backgroundColor: 'rgba(255,204,204,.8)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [8, 8, 8, 7, 6, 6, 6, 0, 5]
    }
  ]
}

export default class DataChart extends React.Component {
  render() {
    return (
      <div className="border-b-4 border-blue-600 p-4">
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Completed Milestones',
              fontSize:30,
              fontColor:'#000000',
              fontFamily:"Apple Garamond"
            },
            legend:{
              display:true,
              position:'right'
            },
            scales:{
                yAxes:[{
                    ticks:{
                        suggestedMax: 9
                    }
                }]
            }
          }}
        />
      </div>
    );
  }
}