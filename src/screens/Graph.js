import React, { useEffect, useState } from 'react'
import { Pie, Line } from 'react-chartjs-2'
import axios from 'axios'
import './Graph.css'
function BarChart() {
    const [value, setValue] = useState({})
    useEffect(() => {
        axios.get('https://api.blockchain.info/charts/transactions-per-second?timespan=5weeks&rollingAverage=8hours&format=json')
        .then((res) => {
            setValue(res.data);
            //console.log(res.data.values);
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    // console.log(value)
    var d = [];
    var e = [];
    try{
        for(let i=0;i<value.values.length;i++){
            d[i] = value.values[i];
        }
        for(let i=0;i<value.values.length;i++){
            e[i] = '';
        }
    }
    catch(err){

    }
  return (
    <div className='sz'>
      <Line
        data={{
          labels: e,
          datasets: [
            {
              label: 'Transaction Rate',
              data: d,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  )
}

export default BarChart