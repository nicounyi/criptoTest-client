import React from "react";

const Blocks = () => {
  return (
    <>
        <div className="col-12 blockBox">
          <div className="row">
            <div className="col-3">
              <i className="bi bi-collection"></i> 1223300 <br/>
              25 sec ago
            </div>
            <div className="col-9">
              Miner: 0xCD458d7F11023556cC9058F729831a038Cb8Df9c             
              <br/>
              Transacciones: 20 txns
            </div>
          </div>
        </div>
        <div className="col-12 blockBox">
          <div className="row">
            <div className="col-3">
              <i className="bi bi-collection"></i> 1223300 <br/>
              25 sec ago
            </div>
            <div className="col-9">
              Miner:             
              <br/>
              Transacciones: 
            </div>
          </div>
        </div>
    </>
  );
};

export default Blocks;
