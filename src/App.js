import logo from './logo.svg';
import './App.css';
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

function App() {
  const driverObj = driver({
    showProgress: true,
    steps: [
      { popover: { title: 'Happy Coding', description: 'And that is all, go ahead and start adding tours to your applications.' } },
      { element: '#logo', popover: { title: 'Animated Tour Example', description: 'Here is the code example showing animated tour. Let\'s walk you through it.', side: "left", align: 'start' } },
      { element: '#description', popover: { title: 'Import the Library', description: 'It works the same in vanilla JavaScript as well as frameworks.', side: "bottom", align: 'start' } },
      { element: '#learn', popover: { title: 'Importing CSS', description: 'Import the CSS which gives you the default styling for popover and overlay.', side: "bottom", align: 'start' } },
      { popover: { title: 'Happy Coding', description: 'And that is all, go ahead and start adding tours to your applications.' } }
    ]
  });

  driverObj.drive();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" id='logo' />
        <p id='description'>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a id='learn'
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
