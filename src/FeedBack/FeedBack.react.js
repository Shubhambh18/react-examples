import React from 'react';

/* Statless hai child of blog*/

const FeedBack = (props) => {

  
    
    return (
        
        <div >
                <button className='fa fa-thumbs-up' onClick={props.action}> Like </button>
                <button className='fa fa-thumbs-down' onClick={props.action2.FeedBack}> DisLike</button>
        </div>
    );

}

export default FeedBack;