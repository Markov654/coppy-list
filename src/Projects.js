import React from "react";


function Projects(props) {
   
   return <div>

       <h1> Try props {props.brand} </h1>
   

    </div>;
}

function SeeRabbit(){
   return(
    <>
    <h2> I like me?</h2>
    <Projects brand = 'my faivorite rabbit'/>
    </>
   );
}
 
export default SeeRabbit;