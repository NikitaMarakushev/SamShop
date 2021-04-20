import { observer } from 'mobx';
import React, {useContext} from 'react';
import {Context} from "../index";
import { SHOP_ROUTE } from '../utils/consts';

const Navbar = observer(() => {

    const {user} = useContext(Context);

    return (
        <Navbar bg="dark" variant="dark">
            <Container>

            </Container>
            <NavLink style={{color: "white"}} to={SHOP_ROUTE}>
                Buy
            </NavLink>
            {user.isAuth ? 
            <Nav className="ml-auto" style={{color: 'white'}}>
                <Button variant={"outline-light"}>Admin panel</Button>
                <Button variant={"outline-light"}>Enter</Button>
            </Nav>
            :
            <Nav className="ml-auto" style={{color: "white"}}>
                <Button variant={"outline-light"} onClick={() => user.setIsAuth(true) }>Authorization</Button>
            </Nav>
            }
        </Navbar>
    );
});

export default Navbar;