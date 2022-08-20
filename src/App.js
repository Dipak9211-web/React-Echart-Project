import React from 'react'
//import Barchart from './pages/BarChart';
//import BarchartResult from './pages/BarchartResult';
import Barchart from './pages/Barchart';
import ScatterChart from './pages/ScatterChart';


function App() {
  return (
    <div>
    <div className="container">
      <div className="Barchart">
      <Barchart/>
      </div>
      <div className="ScatterChart">
     <ScatterChart/>
      </div>
    </div>

      
    </div>
  );
}

export default App;
