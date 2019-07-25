import React from 'react';
import ShowDonor from '../ShowDonor/ShowDonor.react';
import Search from '../Search/Search.react';
import Blog from '../Blog/Blog.react';


const Content = (props) => {

    return (
        <div >
            <h2>Current Request</h2>
            <h3>{props.request.bloodGroup}</h3>
          
            
            <h2>{props.request.location}</h2>
            <ol >
                <li>
                    <span >
                        <img src={props.request.imgRef} alt='opos'/>
                        <h2>{props.request.requireUnit}</h2>
                            </span>
                </li>
            </ol>
           <ShowDonor title={'Star Donors'}></ShowDonor>
           <Search></Search>
           <Blog></Blog> 
        </div>
    );

}

export default Content;