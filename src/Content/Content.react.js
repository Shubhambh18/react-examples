import React from 'react';



const Content = (props) => {

    return (
        <div >
            <h2>Current Request</h2>
            <h3>{props.request.bloodGroup}</h3>
          
            
            <h2>{props.request.location}</h2>
            <ol>
                <li>
                    <span >
                        <img src={props.request.imgRef} alt='opos'/>
                        <h2>{props.request.requireUnit}</h2>
                            </span>
                </li>
            </ol>
        </div>
    );

}

export default Content;