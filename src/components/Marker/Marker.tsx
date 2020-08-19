import React from 'react';
import './Marker.css';

const Marker = (props: any) => {
  const { color, name, id } = props;
  return (
    <div>
      <div
        className="pin bounce"
        style={{ backgroundColor: color }}
        
      ><span style={{ color: "white" }}>{name}</span></div>
      {/* <div className="pulse" /> */}
      

    </div>
  );
};
// const Marker = (props: any) => {
//   const { color, name, id, lat } = props;
//   return (
//     <div>
//       <div
//         className="pin bounce"
//         style={{ backgroundColor: color, cursor: 'pointer' }}
//         title={name}
//       />
//       <div>{name}</div>
//       <div className="pulse" />
//     </div>
//   );
// };

export default Marker;
