import './Navbar.css'

function Navbar () {
    return (
        <div className="Menu-Body">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="./Create">Create</a></li>
                <li><a href="/Edit">Edit</a></li>
                <li><a href="/Details">Details</a></li>
                <li><a href="/Delete">Delete</a></li>
            </ul>
        </div>
    );
}

export default Navbar;