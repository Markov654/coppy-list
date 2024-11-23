import { Link } from 'react-router-dom';
import logo from "./car.png"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Navbar = () => {
    return (
        <Container>
            <Row>
                <Col><img src={logo} width={150} height={150} /> </Col>
                <Col>
                    <nav className='navigation'>
                        <Link to="/">За нас</Link>
                        <Link to="/about">Автопарк</Link>
                        <Link to="/projects">Често задавани въпроси</Link>
                        <Link to="/contact">Контакти</Link>
                    </nav>
                </Col>
                <Col><button className='button'> Виж колите</button></Col>
            </Row>
        
      
        
        </Container>
    );
}
 
export default Navbar;