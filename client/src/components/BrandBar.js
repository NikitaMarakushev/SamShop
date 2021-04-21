import React from 'react'
import {observer} from 'mobx-react-lite';
import { Context } from '../index';
import {Card, Row} from 'react-bootstrap';

const BrandBar = observer(() => {
    const {device} = useContext(Context);
    return (
        <Row className="d-flex">
            {device.brands.map(brnad =>
                <Card
                    key={brand.id}
                    className="p-4"
                    onClick={() => device.setSelectedBrand(brand)}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar
