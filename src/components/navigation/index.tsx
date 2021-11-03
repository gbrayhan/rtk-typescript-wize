import React from 'react';
import {Nav} from 'rsuite'
import DashboardIcon from '@rsuite/icons/Dashboard';
function Navigation() {
    return (
        <div>
            <Nav>
                <Nav.Item icon={<DashboardIcon />}>Home</Nav.Item>
                <Nav.Item>News</Nav.Item>
                <Nav.Item>Solutions</Nav.Item>
                <Nav.Item>Products</Nav.Item>
                <Nav.Item>About</Nav.Item>
            </Nav>
        </div>
    );
}

export default Navigation;
