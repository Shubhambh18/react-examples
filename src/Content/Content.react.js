import React from 'react';
import ShowDonor from '../ShowDonor/ShowDonor.react';
import Search from '../Search/Search.react';
import Blog from '../Blog/Blog.react';
import FetchDonors from '../FetchDonors/FetchDonors.react';
import AddDonor from '../AddDonor/AddDonor.react'
import LifeCycle from '../LifeCycle/LifeCycle.react';
import Header from '../Header/Header.react';
import ShowContent from '../ShowContent/ShowContent.react';
import abpos from '../img1.jpg';


const request={
    bloodGroup:'opos',
    requireUnit:'12',
    location:'Chennai',
    imgRef:abpos
  }
  
const Content = (props) => {

    return (
        <div >
            <h2>Current Request</h2>
            <ShowContent request = {request}></ShowContent>
            {/* <h3>{props.request.bloodGroup}</h3> */}
          
{/*             
            <h2>{props.request.location}</h2>
            <ol >
                <li>
                    <span >
                        <img src={props.request.imgRef} alt='opos'/>
                        <h2>{props.request.requireUnit}</h2>
                            </span>
                </li>
            </ol> */}
           {/* <ShowDonor title={'Star Donors'}></ShowDonor> */}
           {/* <AddDonor></AddDonor>
           
           <Search></Search>
           <Blog></Blog> 
           <FetchDonors/>
           <LifeCycle/> */}
        </div>
    );

}

export default Content;