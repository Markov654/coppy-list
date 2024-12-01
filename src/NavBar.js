import { Link } from 'react-router-dom';
import logo from "./car.png"



const Navbar = () => {
    return (
     <div className='container'>
        <div className='row'>
            <div className='col-md-3'>
            <img src = {logo}></img>
            </div>
     <div className='col-md-6'>
     <nav className='navigation'>
                        <Link to="/">За нас</Link>
                        <Link to="/about">Автопарк</Link>
                        <Link to="/projects">Често задавани въпроси</Link>
                        <Link to="/contact">Контакти</Link>
                    </nav>
     </div>
     <div className='col-md-3'>
        <button className='button'>Виж колите</button>
     </div>
        </div>
     </div>
    );
}
 
export default Navbar;