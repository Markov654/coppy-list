import { Link } from 'react-router-dom';
import logo from "./car.png"
 
const Navbar = () => {
    return (
        <div className='container'>
        <img src={logo} width={150} height={150} />
        <nav className='nav'>
            <ul>
                <li><Link to="/">За нас</Link></li>
                <li><Link to="/about">Автопарк</Link></li>
                <li><Link to="/projects">Често задавани въпроси</Link></li>
                <li><Link to="/contact">Контакти</Link></li>
            </ul>
        </nav>
        <button className='button'> Виж колите</button>
        </div>
    );
}
 
export default Navbar;