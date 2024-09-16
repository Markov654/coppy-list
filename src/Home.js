import { useState } from "react";
import ReactDOM from 'react-dom/client'
const Home = () => {

    const [color,setColor] = useState('red');

    return <div>
       <h1>My favorite color is {color}</h1>
       <button type="button" onClick={() => setColor('blue')}>Blue</button>

    </div>;
}
 
export default Home;
// state and update state with react hook