import React from 'react';
import {Col, Container, Image, Row, Card} from "react-bootstrap";
import bigStar from '../assets/bigStar.png';

const DevicePage = () => {
    const device = {id: 1, name: 'iphoner 11', price: 2500, rating: 4, img: 'https://bit.ly/2PPkWOg'};
    const descriptions = [
        {id : 1, titile: 'Оперативаня память', description: '5 гб'},
        {id : 2, titile: 'Встроенная память', description: '5 гб'},
        {id : 3, titile: 'Камера', description: '5 гб'},
        {id : 4, titile: 'Версия операционной система', description: '5 гб'},
        {id : 5, titile: 'Процессор', description: '5 гб'},
    ]

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={200} height={300} src={device.img} />
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2> 
                        <div className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigStar}) no-repeat center center`,
                            width:240,
                            height:240,
                            backgroundSize: 'cover',
                            fontSize: 64
                            }}>
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>От {device.price} руб.</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col> 
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {descriptions.map((info, index )=> 
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.titile}: {info.description}
                    </Row>    
                )}
            </Row>
        </Container>
    );
}

export default DevicePage;