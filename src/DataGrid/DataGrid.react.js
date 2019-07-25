import React from 'react';

import PropTypes from 'prop-types';

const DataGrid = (props) => {

    return (
        <div >
          
            <table className='table table-striped'>
                {/* <thead>
                    <tr>
                    <th>Donor Name</th>
            <th>Blood Group</th>
            <th>Phone No</th>
            <th>Donation Count</th>
                    </tr>
                
                </thead> */}

                {props.children}
           
            <tbody>
                {

                props.donorList.map((eachDonor,index)=>{
                    return <tr key={index}>
                        
                        <td>{eachDonor.donorName}</td>
                        <td>{eachDonor.bloodGroup}</td>
                        <td>{eachDonor.phoneNumber}</td>
                        <td>{eachDonor.donationCount}</td>
                </tr>
                })
                }
            </tbody>
              
            </table>    
           
        </div>
        
    );

    
}
let Donor = PropTypes.shape({
    donorName: PropTypes.string.isRequired,
    bloodGroup: PropTypes.oneOf(['apos','bpos','abpos','opos']),
    phoneNumber: PropTypes.number.isRequired,
    donationCount: PropTypes.number.isRequired
    })
    
    DataGrid.propTypes = {
    donorList: PropTypes.arrayOf(Donor).isRequired
    }


export default DataGrid;