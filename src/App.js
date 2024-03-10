import logo from './logo.svg';
import './App.css';

function App() {


  class TaskScheduler {
    constructor() {
      this.tasks = [];
    }

    // Schedule a function to run at a specific interval (in milliseconds)
    scheduleAt(interval, func, ...args) {
      const task = setInterval(() => {
        func(...args);
      }, interval);

      this.tasks.push(task);
    }

    // Cancel all scheduled tasks
    cancelAll() {
      this.tasks.forEach((task) => {
        clearInterval(task);
      });
      this.tasks = [];
    }
  }

  module.exports = TaskScheduler;

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
    </div>
  );
}

export default App;
