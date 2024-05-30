import React from 'react';
import ReactDOM from 'react-dom';
import SunburstChart from './SunburstChart';
import data from './data.json'; // Asegúrate de importar tus datos

const App = () => {
  return (
    <div>
      <h1>Análisis Pagos</h1>
      <SunburstChart data={data} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
