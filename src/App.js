import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./NavBar";
 
const App = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};
 
export default App;
