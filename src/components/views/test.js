import React, {useState, useEffect} from "react";
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

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
//   hasta aca para graficar 

export const Test = (props) =>{

  const [TrueAnswers, setTrueAnswers] = useState(0)
  const [FalseAnswers, setFalseAnswers] = useState(0)

  const [TrueAnswers2, setTrueAnswers2] = useState(0)
  const [FalseAnswers2, setFalseAnswers2] = useState(0)

  const [TrueAnswers3, setTrueAnswers3] = useState(0)
  const [FalseAnswers3, setFalseAnswers3] = useState(0)

  const [TrueAnswers4, setTrueAnswers4] = useState(0)
  const [FalseAnswers4, setFalseAnswers4] = useState(0)
  
  const [TrueAnswers5, setTrueAnswers5] = useState(0)
  const [FalseAnswers5, setFalseAnswers5] = useState(0)

  const loadTests = async () => {
    const rest = await fetch('http://localhost:8000/api/users/tests', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${props.token}`
      },
    });
    var TrueauxAnswer = 0, falseAuxAnswer = 0 

    var TrueauxAnswer2 = 0, falseAuxAnswer2 = 0 

    var TrueauxAnswer3 = 0, falseAuxAnswer3 = 0 

    var TrueauxAnswer4 = 0, falseAuxAnswer4 = 0 

    var TrueauxAnswer5 = 0, falseAuxAnswer5 = 0 

    var i;
    const dataTests = await rest.json();
    for(i=0 ; i < dataTests.length; i++){
      dataTests[i].question_1 ? TrueauxAnswer++ : falseAuxAnswer++

      dataTests[i].question_2 ? TrueauxAnswer2++ : falseAuxAnswer2++

      dataTests[i].question_3 ? TrueauxAnswer3++ : falseAuxAnswer3++

      dataTests[i].question_4 ? TrueauxAnswer4++ : falseAuxAnswer4++

      dataTests[i].question_5 ? TrueauxAnswer5++ : falseAuxAnswer5++
    }

    setTrueAnswers(TrueauxAnswer)
    setFalseAnswers(falseAuxAnswer)

    setTrueAnswers2(TrueauxAnswer2)
    setFalseAnswers2(falseAuxAnswer2)

    setTrueAnswers3(TrueauxAnswer3)
    setFalseAnswers3(falseAuxAnswer3)

    setTrueAnswers4(TrueauxAnswer4)
    setFalseAnswers4(falseAuxAnswer4)

    setTrueAnswers5(TrueauxAnswer5)
    setFalseAnswers5(falseAuxAnswer5)
  };

  useEffect(() => {
    loadTests();
  });

  // CONFIGURACION DE LA GRAFICA DATA Y VISUAL 
  const labels = ['Question1', 'Question2', 'Question3', 'Question4', 'Question5'];
  const data = {
      labels,
      datasets: [
        {
          label: 'True',
          data: [TrueAnswers,TrueAnswers2,TrueAnswers3,TrueAnswers4,TrueAnswers5],
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'False',
          data: [FalseAnswers,FalseAnswers2,FalseAnswers3,FalseAnswers4,FalseAnswers5],
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