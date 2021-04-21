import React from 'react'
import {Card, Col} from "react-bootstrap";

const DeviceItem = ({device}) => {
    return (
        <Col className="d-flex">
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} heigt={150} src={device.img} />
                <div>
                    <div>Samsung</div>
                    <div>
                        <div>{device.rating}</div>
                    </div>
                </div>
            </Card>
        </Col>
    )
}

export default DeviceItem
