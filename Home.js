import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cardm from './Cardm.js';
import Slider from './Slider.js';
import './cssfiles/Home.css';
// import Image from 'react-bootstrap/Image';
// import softechannoucement from './pictures/softechannoucementpic.png';

export default function Home(){
    return(
        <div>
            <Slider/>
        <Container>
            <center>
            <Row>
                <Col> <Cardm/> </Col>
            </Row>
            </center>
        </Container>
        </div>
    );
}