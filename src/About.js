
import rabit from './rabbit-475261_0.webp';
import Project from "./Projects"
const About = () => {
    
    return( 
    <>
    <h1>About</h1>
    <div className='rabbit'>
    <img src={rabit} width={250} height={300}></img>
    <p> This is my pet. My wife take care for him</p>
    <Project></Project>
    </div>


    </>
    );
    
}
 
export default About;