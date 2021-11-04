import React from 'react';
import {Nav} from 'rsuite'
import {useHistory} from "react-router-dom";
import {HomeStyled, WrapperNav} from "./index.styled";

function Navigation() {
    const history = useHistory();
    const handleRoute = (route: string) => {
        history.push(route);
    };

    return (
        <WrapperNav>
            <Nav>
                <Nav.Item icon={<HomeStyled size="1.1rem"/>}
                          onSelect={() => handleRoute("/pokemon/list")}>Home</Nav.Item>
                <Nav.Item>Cart</Nav.Item>
            </Nav>
        </WrapperNav>
    );
}

export default Navigation;
