import { Link } from 'react-router-dom';
import logo from "./car.png"



const Navbar = () => {
    return (
     <div className='container'>
        <div className='row'>
            <div className='col-md-2'>
            <img src = {logo}  height={240}></img>
            </div>
     <div className='col-md-8'>
     <nav className='navigation'>
        <ul>
        <li><a> <Link to="/">За нас</Link></a></li>
        <li><a> <Link to="/about">Автопарк</Link></a></li>
        <li><a> <Link  to="/projects">Често задавани въпроси</Link></a></li>
        <li><a> <Link to="/contact">Контакти</Link></a></li>
        <span><Link to="/contact">К</Link>k</span> 
        <span><Link to="/contact">К</Link>k</span> 
       
            
       
        </ul>
                       
                    </nav>
     </div>
     <div className='col-md-2'>
        <button className='button'>Виж колите</button>
     </div>
        </div>
     </div>
    );
}
 
export default Navbar;