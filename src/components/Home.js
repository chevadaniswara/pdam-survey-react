import { Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import undraw from '../assets/img/undraw.png';
import Animations from './Animation';


function Home() {

    return (
        <Animations>
            <div>
                <div style={{ textAlign: "center" }}>
                    <h3>PENILAIAN ANDA SANGAT BERHARGA</h3>
                    <img src={undraw} alt="illustrasi_homepg" />
                    <Row className="justify-content-center">
                        <Col xs={6} className="text-center">
                            <p style={{ fontSize: '17px' }}>Sebagai bentuk evaluasi kami agar dapat meningkatkan pelayanan kami kepada Anda, kami mohon dapat diisi survey pelayanan pelanggan yang kami sediakan. Kami sangat menghargai masukan dan kritik yang diberikan.</p>
                            <Button variant="primary" size="lg">
                                <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/alasan">
                                    Mulai Survey
                                </Link>
                            </Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </Animations>
    );
}

export default Home;
