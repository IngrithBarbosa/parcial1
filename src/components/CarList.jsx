import React, { useState } from "react";
import Car from "./Car";

export default function Cars() {

    const [offers] = useState(
        [
            {
                 "id": 1,
                 "marca": "Renault",
                 "linea": "Kangoo",
                 "referencia": "VU Express",
                 "modelo": 2017,
                 "kilometraje": 93272,
                 "color": "Blanco",
                 "imagen": "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202410/kangoo.jpeg?raw=true"
             },
             {
                 "id": 2,
                 "marca": "Chevrolet",
                 "linea": "Spark",
                 "referencia": "Life",
                 "modelo": 2018,
                 "kilometraje": 55926,
                 "color": "Plata",
                 "imagen": "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202410/spark.jpeg?raw=true"
             }
         ]
    )

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Marca</th>
            <th scope="col">Linea</th>
            <th scope="col">Modelo</th>
          </tr>
        </thead>
        <tbody>
          {offers.map((e, i) => (
            <Car key={i} offer={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};