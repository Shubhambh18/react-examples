import React from 'react';
import DataGrid from '../DataGrid/DataGrid.react';
import PropTypes from 'prop-types';

let donorName ="Ramesh";
let donorList = [
    {donorName:"ramesh",phoneNumber:998778,bloodGroup:"opos",donationCount:45},
    {donorName:"Samesh",phoneNumber:998718,bloodGroup:"apos",donationCount:35},
    {donorName:"Mahesh",phoneNumber:918778,bloodGroup:"bpos",donationCount:25}
];
const ShowDonor = (props) => {

    return (
        <div >
            {/* <DataGrid donorName={donorName}></DataGrid> */}
            <h1 className='text-center'> {props.title}</h1>
            <DataGrid donorList={donorList}>
                <thead>
                    <tr>
                        <th>Donor Name</th>
                        
                        <th>Blood Group</th>
                        <th>Phone No</th>
                        <th>Donated Units</th>
                    </tr>
                </thead>


            </DataGrid>
        </div>
    );
    ShowDonor.propTypes= {
        title: PropTypes.string
        };

}

export default ShowDonor;