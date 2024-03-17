import {Card, Col} from "react-bootstrap";
import {FormattedMessage} from "react-intl";

function CarDetail(props) {
    return (
        <Col>
            <Card className="carDetail">
                <Card.Title className="tituloDetail">{props.car.marca +" "+ props.car.linea}</Card.Title>
                <Card.Img variant="top" className="imgCar" src={props.car.imagen} />
                <Card.Body className="carText">
                    <Card.Text><FormattedMessage id="Mileage"/>: {props.car.kilometraje}</Card.Text>
                    <Card.Text><FormattedMessage id="Color"/>: {props.car.color}</Card.Text>
                    <Card.Text><FormattedMessage id="Reference"/>: {props.car.referencia}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default CarDetail;