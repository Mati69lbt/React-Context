import React, { useContext } from "react";
import "../index.css";
import CrudContext from "./context/CrudContext";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

const CrudApi = () => {
  const { db, loading, error } = useContext(CrudContext);

  return (
    <div>
      <h2 style={{ marginLeft: "2%" }}>
        CRUD Api - Entrenadores de 2da División, AFA
      </h2>
      <article className="grid-1-2">
        <CrudForm />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && <CrudTable data={db} />}
      </article>
    </div>
  );
};

export default CrudApi;
