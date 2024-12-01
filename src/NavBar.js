import { Link } from 'react-router-dom';
import logo from "./car.png"



const Navbar = () => {
    return (
     <div className='container'>
        <div className='row'>
            <div className='col-md-3'>
            <img src = {logo}  height={240}></img>
            </div>
     <div className='col-md-6'>
     <nav className='navigation'>
        <ul>
        <li><a> <Link to="/">За нас</Link></a></li>
        <li><a> <Link to="/about">Автопарк</Link></a></li>
        <li><a> <Link  to="/projects">Често задавани въпроси</Link></a></li>
        <li><a> <Link to="/contact">Контакти</Link></a></li>
            
       
        </ul>
                       
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