import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './cssfiles/Contact.css';
import Button from 'react-bootstrap/Button';
import contactpic from './pictures/contactuspng.png';
import Image from 'react-bootstrap/Image';

export default function Contact() {
    return (
        <div className="contact-page">

            {/* 🔥 HEADER */}
            <div className="contact-header text-center">
                <h1>Contact Our Bookstore</h1>
                <p>
                    Have questions about books, orders, or recommendations?  
                    We're here to help you anytime 
                </p>
            </div>

            <Container>
                <Row className="align-items-center">

                    {/* LEFT SIDE IMAGE */}
                    <Col md={6} className="text-center">
                        <Image 
                            src={contactpic} 
                            alt="contact pic" 
                            className='imgclass' 
                        />
                    </Col>

                    {/* RIGHT SIDE FORM */}
                    <Col md={6} className="d-flex justify-content-center">
                        <Card className="contact-card">

                            <h4 className="form-title">Send us a message</h4>

                            <div className='inputclass'>
                                <input type="text" placeholder='Your Name' />
                                <input type="email" placeholder='Your Email' />
                                <textarea rows={5} placeholder='Tell us what you need...'></textarea>
                            </div>

                            <Card.Body>
                                <Button>Send Message</Button>
                            </Card.Body>

                        </Card>
                    </Col>

                </Row>
            </Container>

            {/* 🔥 FOOTER TEXT */}
            <div className="contact-footer text-center">
                <p>“A room without books is like a body without a soul.”</p>
            </div>

        </div>
    );
}