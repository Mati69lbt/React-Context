import React, { useContext } from "react";
import CrudContext from "./context/CrudContext";

const CrudTableRow = ({ el }) => {
  const { setDataToEdit, deleteData } = useContext(CrudContext);
  let { club, nombre, apellido, edad, nacimiento, id } = el;
  return (
    <tr>
      <td>{club}</td>
      <td>{nombre}</td>
      <td>{apellido}</td>
      <td>{edad}</td>
      <td>{nacimiento}</td>

      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
