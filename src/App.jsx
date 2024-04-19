import { useEffect, useState } from 'react';
import './App.css';
import Buttons from './components/Buttons'
import Result from './components/result_display'

function App() {

  let [expression,setExpression] = useState('')

  let [evalValue, setEvalValue] = useState()


  console.log('exp:',expression,'eval:',evalValue)


  return (
    <div className="App">

      <div className="calculator_container">
        <Result evalValue={evalValue} expression={expression}></Result>
        <Buttons setExpression={setExpression} expression={expression} setEvalValue={setEvalValue}></Buttons>
        
      </div>
      
    </div>
  );
}

export default App;
