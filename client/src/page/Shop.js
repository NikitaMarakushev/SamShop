import React from 'react';
import Raw from 'react-bootstrap/Raw';
import Col from 'react-bootstrap/Col';
import TypeBar from '../components/TypeBar';

const Shop = () => {
    return (
        <Container>
            <Raw className="mt-2">
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>

                </Col>
            </Raw>
        </Container>
    );
}

export default Shop;