import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
    <nav>
        <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/accounts">Accounts</Link></li>
            <li><Link to="/payments">Payments</Link></li>
            <li><Link to="/recommendations">Recommendations</Link></li>
        </ul>
    </nav>
);

export default Navbar;
