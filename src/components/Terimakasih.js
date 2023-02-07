import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";
import illustrasi from '../assets/img/undraw2-sm.png';
import Animations from './Animation';

function Terimakasih() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 5000); // 5000ms = 5 seconds
    }, [navigate]);

    return (
        <Animations>
            <div>
                <div style={{ textAlign: "center" }}>
                    <h3>Terimakasih, penilaian anda sangat berharga</h3>
                    <img src={illustrasi} alt="ilustrasi halaman trims" />
                    <Row className="justify-content-center">
                        <Col xs={6} className="text-center">
                            <p>Kembali ke halaman awal dalam 5 detik...</p>
                        </Col>
                    </Row>
                </div>
            </div>
        </Animations>
    );
}

export default Terimakasih;