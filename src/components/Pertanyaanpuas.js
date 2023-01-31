import React from 'react'
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Pertanyaanpuas() {
    return (
        <Container>
            <h3>Mengapa anda puas?</h3>
            <Row>
                <Col> 1 </Col>
                <Col xs={6}>
                    <div className="d-grid gap-2">
                        <Button variant="primary" size="lg">
                            <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/alasan">
                                Proedurnya Jelas
                            </Link>
                        </Button>
                        <Button variant="primary" size="lg">
                            Pelayanan cepat
                        </Button>
                        <Button variant="primary" size="lg">
                            Staff yang ramah
                        </Button>
                        <Button variant="primary" size="lg">
                            Suasana nyaman
                        </Button>
                        <Button variant="primary" size="lg">
                            Lainnya
                        </Button>
                    </div>
                </Col>
                <Col> 1 </Col>
            </Row>
        </Container>
    );
}

export default Pertanyaanpuas