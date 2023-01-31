import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Dropdown from './Dropdowncompo';
import axios from 'axios';

function Alasan() {
    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = useState('Pilih alasannya disini ya');
    const [formText, setFormText] = useState('');

    // function untuk judul dropdown
    const handleSelect = (eventKey) => {
        setSelectedItem(eventKey);
    }

    //function untuk POST ke PHP. selectedItem itu dropdown, formText itu kolom ulasan
    const handleFormSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost/pdam-react-basic/data/save', {
            selectedItem,
            formText
        })
        .then((res) => {
            console.log(res);
            navigate("/");
        })
        .catch((error) => {
            console.error(error);
        });
    }

    return (
        <div>
            <h3>Adakah yang bisa kami tingkatkan?</h3>
            <Dropdown handleSelect={handleSelect} selectedItem={selectedItem} />
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3 d-flex mx-auto" style={{ width: "50%" }} controlId="texa_alasan">
                    <Form.Control as="textarea" rows={3} onChange={(e) => setFormText(e.target.value)} />
                </Form.Group>
                <Button variant="primary" size="lg" type="submit">
                        Selesaikan Survey
                </Button>
            </Form>
        </div>
    );
}

export default Alasan;