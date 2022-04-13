import React, { useEffect, useState } from "react";
import { getNewBlock } from "../services/get";

const Blocks = () => {
  const [results, setResults] = useState([]);
  const [filterResult, setFilterResults] = useState([]);
  const [isloaded, setLoaded] = useState(false);

  useEffect(() => {
    getBlocks();
    setInterval(() => getBlocks(), 8000);
  }, []);

  useEffect(() => {
    let filter = results.filter(
      (ele, ind) => ind === results.findIndex((elem) => elem.blockNumber === ele.blockNumber)
    );
    setFilterResults(filter);
    console.log(filterResult);
  }, [results]);

  const getBlocks = async () => {
    const res = await getNewBlock();
    setResults((results) => [res.data, ...results]);
  };

  return (
    <>
      <div className="maxHeightBox">
        {filterResult &&
          filterResult.map((item) => (
            <div className="col-12 blockBox" key={item.blockNumber}>
              <div className="row">
                <div className="col-3">
                  <i className="bi bi-collection"></i> {item.blockNumber} <br />
                  {item.time}
                </div>
                <div className="col-9">
                  Miner: {item.miner}
                  <br />
                  Transacciones: {item.transactionsQuantity} txns
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Blocks;
