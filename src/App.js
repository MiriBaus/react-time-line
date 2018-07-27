import React, { Component } from 'react';
import './App.css';
import { Mes } from './components/mes.jsx';
import { Dias } from './components/dias.jsx';

const año = 2018

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
]

function crearDias(item) {


  const esteMes = meses.indexOf(item)


  const dias = new Date(año, esteMes + 1, 0).getDate();

  let contador = 0;
  let diasDelMes = []

  for (var c = 1; c <= dias; c++) {

    contador++
    diasDelMes.push(contador)

  }

  contador = 0

  return diasDelMes
}

class App extends Component {
  render() {

    return (
      <div className="App">

        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-center">
            <a className="navbar-brand" href=""><h1>2018</h1></a>
          </nav>
        </header>

        <div className="container linea">
            {
              meses.map((item, i) => (
                <div key={`mes-${i}`} className="mes col-md-12 ">
                  <Mes mes={item} />
                  <Dias dias={crearDias(item)} />

                </div>
              ))
            }
        </div>



      </div>
    );
  }
}

export default App;
