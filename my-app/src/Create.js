import './Create.css';
import Navbar from './Navbar';

function Create() {
  return (
    <div className="Create-Body">
      <header className="Create-Header">
        <h1>Personal React Project - Basic CRUD with Data Table</h1>
      </header>
      <Navbar/>
      <p>This page is going to be used for creating and adding a new data entry into the database.</p>
    </div>
  );
}

export default Create;