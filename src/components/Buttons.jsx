import React from 'react'
import './components.css'

function Buttons({setExpression,expression,setEvalValue}) {
    function useSetExpression(val){
        setExpression(v => v+val)
    }
  return (
    <>
        <section className='buttons_container'>
            <div className="button" onClick={() => useSetExpression('0')}>0</div>
            <div className="button" onClick={() => useSetExpression('1')}>1</div>
            <div className="button" onClick={() => useSetExpression('2')}>2</div>
            <div className="button" onClick={() => useSetExpression('3')}>3</div>
            <div className="button" onClick={() => useSetExpression('4')}>4</div>
            <div className="button" onClick={() => useSetExpression('5')}>5</div>
            <div className="button" onClick={() => useSetExpression('6')}>6</div>
            <div className="button" onClick={() => useSetExpression('7')}>7</div>
            <div className="button" onClick={() => useSetExpression('8')}>8</div>
            <div className="button" onClick={() => useSetExpression('9')}>9</div>
            <div className="button" onClick={() => useSetExpression('+')}>+</div>
            <div className="button" onClick={() => useSetExpression('-')}>-</div>
            <div className="button" onClick={() => useSetExpression('*')}>*</div>
            <div className="button" onClick={() => useSetExpression('/')}>/</div>
            <div className="button" onClick={
                () => {setEvalValue(eval(expression));setExpression('')}
            }>Calculate</div>
        </section>
    </>
  )
}

export default Buttons