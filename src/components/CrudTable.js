import React, { useContext } from "react";
import CrudContext from "./context/CrudContext";
import CrudTableRow from "./CrudTableRow";
import "../index.css";

const CrudTable = () => {
  const { db } = useContext(CrudContext);
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Tabla de Datos</h3>
      <table className="tabla">
        <thead>
          <tr>
            <th>Club</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Lugar de Nacimiento</th>
          </tr>
        </thead>
        <tbody>
          {db.length > 0 ? (
            db.map((el) => <CrudTableRow key={el.id} el={el} />)
          ) : (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
