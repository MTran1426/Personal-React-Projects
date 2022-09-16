import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Personal React Project - Basic CRUD with Data Table</h1>
      </header>
      {/*This is where I need to decide whether to create a Data table by hand or use an installed react component from the netlify library.*/}
      <Navbar/>
    </div>
  );
}

export default App;

