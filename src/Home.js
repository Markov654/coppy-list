import { useState } from "react";
import{ Button }from"antd"
;
const Home = () => {

    const [color,setColor] = useState('red');

    return <div>
       <h1>My favorite color is {color}</h1>
       <Button type = "primary" onClick={() => setColor('blue')}>Blue</Button>

    </div>;
}
 
export default Home;
// state and update state with react hook