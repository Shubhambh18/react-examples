import React from 'react';



const ShowCity = (props) => {

    console.log("Show City called ^^^^");
    

    return (
        <div >
           <p>{props.city} </p> 
        </div>
    );

}

export default ShowCity;