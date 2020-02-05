import React , {Fragment, useState} from "react";
import "../Marker.css";


const Marker = (props: any) => {
  const { color, name, id, restroom_type} = props;

  return (
    <div
      className="pin bounce"
      style={{ backgroundColor: color, cursor: "pointer", position:"absolute" , transform: 'translate(-50%, -50%)' }}
      title={props.text}
      onClick={e => {
        localStorage.restroom_id = props.restroom_id;
      }}
    >
      {props.text}
    </div>
  );
};

export default Marker;


