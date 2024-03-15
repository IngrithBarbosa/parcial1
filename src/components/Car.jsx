import React from "react";
import { Link } from "react-router-dom";

const Car = (props) => {
  return (
   <tr>
      <Link to ={'/cars/' + props.offer.id}>
        <th scope="row">{props.offer.id}</th>
        <td>{props.offer.marca}</td>
        <td>{props.offer.linea}</td>
        <td>{props.offer.modelo}</td>
      </Link>
    </tr>
  );
};

export default Car;