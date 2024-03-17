import React, { useState } from "react";
import CarDetail from "./CarDetail";
import { FormattedMessage } from "react-intl";

function CarList({ carData }) {
  const [selectedCar, setSelectedCar] = useState(null);

  const handleCarClick = (car) => {
    setSelectedCar(car);
  };

  return (
    <div className="carList">
      <div>
        <table className="table">
          <thead className="headerTable">
            <tr>
              <th className="headerTextnum" scope="col">#</th>
              <th className="headerText" scope="col">
                <FormattedMessage id="Brand" />
              </th>
              <th className="headerText" scope="col">
                <FormattedMessage id="Line" />
              </th>
              <th className="headerText" scope="col">
                <FormattedMessage id="Model" />
              </th>
            </tr>
          </thead>
          <tbody>
            {carData.map((car, index) => (
              <tr key={index} onClick={() => handleCarClick(car)}>
                <td className="num">{index + 1}</td>
                <td>{car.marca}</td>
                <td>{car.linea}</td>
                <td>{car.modelo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedCar && (
        <div className="cardDetail">
          <CarDetail car={selectedCar} />
        </div>
      )}
    </div>
  );
}

export default CarList;
