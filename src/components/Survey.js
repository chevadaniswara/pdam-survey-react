import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Survey() {

    const handleClick = (value) => {
        console.log(value);
      }      

    return (
        <div style={{ textAlign: "center" }}>
            <h3>Apakah anda puas dengan pelayanan kami?</h3>
            <Button variant="primary" size="lg" onClick={() => handleClick(1)} >
                <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/alasan">
                    PUAS
                </Link>
            </Button>
            <Button variant="primary" size="lg" style={{ marginLeft: "10px" }} onClick={() => handleClick(0)} >
                <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/alasan">
                    TIDAK PUAS
                </Link>
            </Button>
        </div>
    )
}
