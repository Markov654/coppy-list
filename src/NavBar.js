import { Link } from 'react-router-dom';
import logo from "./car.png"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Navbar = () => {
    return (
        <Container>
        <Row src={logo} width={150} height={150} />
        <Col className='nav'>
            <ul>
                <Col><Link to="/">За нас</Link></Col>
                <Col><Link to="/about">Автопарк</Link></Col>
                <Col><Link to="/projects">Често задавани въпроси</Link></Col>
                <Col><Link to="/contact">Контакти</Link></Col>
            </ul>
        </Col>
        <button className='button'> Виж колите</button>
        </Container>
    );
}
 
export default Navbar;