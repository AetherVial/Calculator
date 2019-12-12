import React, {useState, useReducer, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState('');
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);

  const handleSubmit = (e) =>{
    e.preventDefault();
    switch (operation) {
      case '+':
        setResult((input1 + input2).toFixed(input1.length));
        break;
      case '-':
        setResult((input1 - input2).toFixed(input1.length));
        break;
      case '*':
        setResult((input1 * input2).toFixed(input1.length));
        break;
      case '/':
        setResult((input1 / input2).toFixed(input1.length));
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{result}</div>
        <input type="text" onChange={(e) => setInput1(parseFloat(e.target.value))}></input>
        <input type="text" onChange={(e) => setInput2(parseFloat(e.target.value))}></input>
        <button onClick={() => setOperation('+')}>+</button>
        <button onClick={() => setOperation('-')}>-</button>
        <button onClick={() => setOperation('*')}>*</button>
        <button onClick={() => setOperation('/')}>/</button>
        <button onClick={(e) => handleSubmit(e)}>=</button>
        
      </header>
    </div>
  );
}

export default App;
