import logo from './logo.svg';
import './App.css';
import Radio from './components/Radio';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Radio label="Laranja" labelFor="laranja" value="laranja" name="frutas"/>
      <Radio label="Maça" labelFor="maça" value="maca" name="frutas"/>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
