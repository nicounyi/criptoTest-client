import React, { useEffect, useState } from "react";
import { getNewBlock } from "../services/get";
import Link from 'next/link'
import { useRouter } from "next/dist/client/router";

const Blocks = () => {
  const [results, setResults] = useState([]);
  const [filterResult, setFilterResults] = useState([]);
  const [isloaded, setLoaded] = useState(true);
  const router = useRouter()

  useEffect(() => {
    getBlocks();
    let polling = setInterval(() => getBlocks(), 7000);
      return () => {
        clearInterval(polling);
      };
  }, []);

  useEffect(() => {
    let filter = results.filter(
      (ele, ind) => ind === results.findIndex((elem) => elem.blockNumber === ele.blockNumber)
    );
    setFilterResults(filter);
  }, [results]);

  const getBlocks = async () => {
    const res = await getNewBlock();
    setResults((results) => [res.data, ...results]);
    setLoaded(false);
  };

  return (
    <>
      <div className="maxHeightBox">
        {
          isloaded &&
          <>
          Cargando blocke
          </>
        }
        {filterResult &&
          filterResult.map((item) => (
            <div className="col-12 blockBox" key={item.blockNumber}>
              <div className="row">
                <div className="col-3">
                  <i className="bi bi-collection"></i> <Link
                    href={{
                      pathname: '/block',
                      query: { search: item.blockNumber },
                    }}
                    >
                    <a className="blockBox__link">{item.blockNumber}</a>
                </Link>
                 <br />
                  {item.time}
                </div>
                <div className="col-9">
                Miner: 
                <Link
                    href={{
                      pathname: '/address',
                      query: { search: item.miner },
                    }}
                    >
                    <a className="blockBox__link">
                    {item.miner}

                      </a>
                      </Link>
                  <br />
                  Transacciones:
                  <Link
                    href={{
                      pathname: '/block',
                      query: { search: item.blockNumber },
                    }}
                    >
                    <a className="blockBox__link">{item.transactionsQuantity} txns</a>
                    </Link>
                   
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Blocks;
