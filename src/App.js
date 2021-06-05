import logo from './logo.svg';
import './App.css';
import React from 'react';

// const people = ['Kamran', 'Agil', 'Rufat', 'Aishan', ' Huseyn', 'Zaur', 'Gazanfar'];
//
// const [first, second, third, ...qalanAdamlar] = people;
// console.log(first, second, third, qalanAdamlar);

// Math.max(1,2,3,4,5);

// const max = (...items) => {
//   console.log(items);
// }
// const nums = [1,2,3,4,5,6];
//
// Math.max(...nums);

// const a = [4,5,6];
// const nums = [1,2,3, ...a];
// console.log(nums)

const Test = ({ name }) => (
    <h4 style={{ userSelect: 'none' }}>{name}</h4>
);

// const toInstallCRA = 'npm i create-react-app -g';
//
// const toCreateApp = 'create-react-app appName';

// false values: false-in ozu, null, undefined, NaN, 0, '' ve ya ""

function App({ name: nameFromProps }) {
  const makeFullName = (name, surname) => `${name} ${surname}`;
  const name = 'Aishan';
  const surname = 'Gulieva';

  const [counter, setCounter] = React.useState(0);
  const [inputName, setInputName] = React.useState(nameFromProps || 'Gazanfar');

  const handleDecrease = () => {
    if (counter > 0) {
      setCounter(oldCounter => oldCounter - 1);
    }
  }

  const handleIncrease = () => {
    setCounter(oldCounter => oldCounter + 1);
  }

  const handleNameChange = (event) => {
    setInputName(event.target.value);
  }

  return (
    <div className={'App'}>
      {/*<Test {...props} />*/}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{makeFullName(name, surname)}</h1>
        <h3>{inputName}</h3>
        <input className="custom-input" type="text" value={inputName} onChange={handleNameChange} />
        {!inputName && <p className="error-text">Name must be filled</p>}
        {inputName.length > 24 && <p className="error-text">Name must be shorter than 24</p>}
        <h1>{counter}</h1>
        <div className="counter__container">
          <button onClick={handleDecrease} className="counter__button counter__button--decreaser">-</button>
          <button onClick={handleIncrease} className="counter__button counter__button--increaser">+</button>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
