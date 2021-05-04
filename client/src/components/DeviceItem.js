import React from 'react'
import {Card, Col} from "react-bootstrap";
import star from '../assets/start.png';
import {useHistory} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {

    const history = useHistory();

    return (
        <Col md={3} className="d-flex" onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} heigt={150} src={device.img} />
                <div className="text-black-50 d-flex justify-content-between align-items-center">
                    <div>Samsung</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image width={20} heigh={20} src={star} />
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    )
}

export default DeviceItem
