import React, { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { getTsx } from "../services/get";
import Link from "next/link";


const Txs = () => {
  const [textTitle, setTextTitle] = useState("");
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);
  const [result, setResults] = useState({});

  const getTsxDetail = async (number) => {
    try {
      const { data } = await getTsx(number);
      setResults(data);
      setLoading(false)
    } catch (error) {
      setResults(error);
      console.error(error);
    }
  };

  useEffect(() => {
    router.query && setTextTitle(router.query.search);
    router.query.search && getTsxDetail(router.query.search);
  }, [router.query.search]);

  return <>
    {
      isLoading &&
      <div>
        Cargando...
      </div>
    }
    {
      !isLoading && result.blockHash &&
        <div className="tableInfo">
          <table className="table table-striped">
            <tbody>
              <tr>
                <th>Numero de bloque:</th>
                <td>
                <Link
                    href={{
                      pathname: "/block",
                      query: { search: result.blockNumber },
                    }}
                  >
                    <a className="tableInfo__link">{result.blockNumber}</a>
                  </Link></td>
              </tr>
              <tr>
                <th>Hash de bloque:</th>
                <td>
                {result.blockHash}
                </td>
              </tr>
              <tr>
                <th>Hash:</th>
                <td>
                {result.hash}
                </td>
              </tr>
              <tr>
                <th>From:</th>
                <td>
                <Link
                    href={{
                      pathname: "/address",
                      query: { search: result.from },
                    }}
                  >
                    <a className="tableInfo__link">{result.from}</a>
                  </Link>
                </td>
              </tr>
              <tr>
                <th>To:</th>
                <td> <Link
                    href={{
                      pathname: "/address",
                      query: { search: result.to },
                    }}
                  >
                    <a className="tableInfo__link">{result.to}</a>
                  </Link></td>
              </tr>
              <tr>
                <th>Gas:</th>
                <td>{result.gasPrice}</td>
              </tr>
            </tbody>
          </table>
          </div>
    }
    {
      !isLoading && !result.blockHash &&
      <div>
        La transaccion no existe
      </div>
    }
  </>;
};

export default Txs;
