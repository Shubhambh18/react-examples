import React from 'react';
import {Link} from 'react-router-dom'


const Header = () => {

    return (
        <div >
            <h1> Doreomon Blood Bank</h1>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                        <Link to='/fetch'>Fetch</Link>
                        <Link to='/add'>Add Donor</Link>

                    </li>
                </ul>
            </nav>
        </div>
    );

}

export default Header;