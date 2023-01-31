import React, { useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

function Dropdowncompo(props) {
  const [selectedItem, setSelectedItem] = useState(props.selectedItem);

  const handleSelect = (eventKey) => {
    setSelectedItem(eventKey);
    props.handleSelect(eventKey);
  }

  return (
    <>
      <div className="mb-2">
        <DropdownButton id="dropdown-basic-button" title={selectedItem} onSelect={handleSelect}>
          <Dropdown.Item eventKey="Prosedurnya">Prosedurnya</Dropdown.Item>
          <Dropdown.Item eventKey="Pelayanannya">Pelayanannya</Dropdown.Item>
          <Dropdown.Item eventKey="Staffnya">Staffnya</Dropdown.Item>
          <Dropdown.Item eventKey="Suasananya">Suasananya</Dropdown.Item>
        </DropdownButton>
      </div>
    </>
  );
}

export default Dropdowncompo;