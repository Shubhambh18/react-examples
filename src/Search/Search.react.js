import React from 'react';


const clear = (msg) =>{
    console.log('Clear Invoked'+msg);

    return ()=>{
        console.log("Clear Inner Called");
    }
}
const Search = () => {

    return (
        <div >  
            <button className="fa fa-search" onClick={(event)=>{console.log(event)}}> Search </button>
            <button className="fa fa-crosshairs" onClick={clear()}> Clear </button>
            {/* when we use clear() then inner function is returned and when we use {clear} then outer will be invoked */}



        </div>
    );

}

export default Search;