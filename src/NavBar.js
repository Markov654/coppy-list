import { Link } from 'react-router-dom';
import logo from "./logo.svg"
 
const Navbar = () => {
    return (
        <div className='container'>
        <img src={logo} width={200} height={200} />
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        </div>
    );
}
 
export default Navbar;