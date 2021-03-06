import { observer } from 'mobx-react-lite'
import React from 'react'
import { Row } from 'react-bootstrap';
import DeviceItem from './DeviceItem';

const DeviceList = observer(() => {
    const {device} = useContext(Context);

    return (
        <Row className="d-flex">
            {device.device.map(device => 
                <DeviceItem key={device.id} device={device} />
            )}
        </Row>
    );
});

export default DeviceList
