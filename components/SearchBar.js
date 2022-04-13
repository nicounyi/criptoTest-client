import React from "react";

const Home = () => {
  return (
    <>
      <div className="input-group">
        <span className="input-group-text p-1">
          <select className="form-select" aria-label="Default select example">
            <option defaultValue disabled>Buscar por...</option>
            <option value="1">Bloque</option>
            <option value="2">Transacciones</option>
            <option value="3">Address</option>
          </select>
        </span>
        <input
          type="text"
          className="form-control"
         
        />
         <button className="btn btn-outline-secondary" type="button" id="button-addon2">Buscar</button>
      </div>
    </>
  );
};

export default Home;
