import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./NavBar";
import  {  Container } from 'react-bootstrap';
 
const App = () => {
    return (
        <>
        <Container>
            <Navbar />
            </Container>
            <Outlet />
        </>
    );
};
 
export default App;
