import React, { useState } from 'react';
import './Marker.css';

const InfoWindow = (props: any) =>
  props.show ? (
    <div style={{ width: 100, height: 100 }}>Info window</div>
  ) : null;

const Marker = (props: any) => {
  const { color, name, id } = props;
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <div
        className="pin bounce"
        style={{ backgroundColor: color }}
        onClick={handleClick}
      >
        <span style={{ color: 'white' }}>{name}</span>
      </div>
      <div className="infoWindow">
        <InfoWindow show={show} />
      </div>
    </div>
  );
};

export default Marker;
