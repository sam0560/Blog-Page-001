import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="navbar">
            <h1>Kaysam Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{backgroundColor: "#f1356d", borderRadius: "10px", color: "white"}}>New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;