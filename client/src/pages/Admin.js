import React from 'react';
import {Button, Container} from "react-router-dom";
import CreateBrand from "../components/modal/CreateBrand";
import CreateDevice from "../components/modal/CreateDevice";
import CreateType from "../components/modal/CreateType";

const Admin = () => {
    const [brandVisible, setBrandVisible] =  useState(false); 
    const [typeVisible, setTypeVisible] =  useState(false); 
    const [deviceVisible, setDeviceVisible] =  useState(false); 

    return (
        <Container className="d-flex flex-column">
            <Button variant={"outline-dark"} className="mt-4 p-2"> 
                Добавить тип
            </Button>
            <Button variant={"outline-dark"} className="mt-4 p-2">
                Добавить бренд
            </Button>
            <Button variant={"outline-dark"} className="mt-4 p-2">
                Добавить устройство
            </Button>
        </Container>
    );
}

export default Admin;