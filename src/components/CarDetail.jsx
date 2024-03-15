import {Card, Col} from "react-bootstrap";
import { useState } from "react";


function CarDetail(carro) {

    const [car] = useState(carro);

    return (
        <Col>
            <Card >
                <Card.Title>{car.marca}</Card.Title>
                <Card.Img variant="top" className="img" src={car.imagen} />
                <Card.Body >
                    <Card.Text>Kilometraje: {car.kilometraje}</Card.Text>
                    <Card.Text>Color: {car.color}</Card.Text>
                    <Card.Text>Referencia: {car.referencia}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default CarDetail;