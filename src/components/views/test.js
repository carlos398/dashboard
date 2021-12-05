import React from "react";
// Se necesita desde aca
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  import faker from 'faker';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
//   hasta aca para graficar 

export const Test = () =>{
    // CONFIGURACION DE LA GRAFICA DATA Y VISUAL 
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data = {
        labels,
        datasets: [
          {
            label: 'True',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'False',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };

    // Configuracion de la tabla
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Test React API',
          },
        },
      };

    return(
        <div className="test-container" >
            <Bar data={data} options={options}/>
        </div>
    );
}