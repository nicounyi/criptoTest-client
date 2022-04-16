import React, { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { getAddressByHash } from "../services/get";

const Address = () => {
  const [textTitle, setTextTitle] = useState("");
  const router = useRouter();
  const [result, setResults] = useState({});
  const [isLoading, setLoading] = useState(true);

  const getTsxDetail = async (number) => {
    try {
      const { data } = await getAddressByHash(number);
      setResults(data);
      setLoading(false);
    } catch (error) {
      setResults(error);
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(router.asPath);
    router.query && setTextTitle(router.query.search);
    router.query.search && getTsxDetail(router.query.search);
  }, [router.query.search]);

  return (
    <>
      {isLoading && <div>Cargando datos...</div>}
      {!isLoading && result.length > 0 && typeof(result) !== 'string' && (
        <> 
        <h5 className="my-4">Historial de Transacciones de: {textTitle}   </h5>
        <div className="table-responsive">
           <table className="table">
           <thead>
                  <tr>
                    <th scope="col">Txn Hash</th>
                    <th scope="col">Bloque Numero</th>
                    <th scope="col">From</th>
                    <th scope="col">To</th>
                  </tr>
                </thead>
                <tbody>
          {result.map((item) => (
            <>
                  <tr key={item.blockNumber}>
                    <td> {item.blockHash}</td>
                    <td> {item.blockNumber}</td>
                    <td> {item.from}</td>
                    <td> {item.to}</td>
                  </tr>
                
            </>
          ))}
         </tbody>
          </table>
        </div>
        </>
      )}
      {!isLoading && result.length === 0 && <div>No existe el address</div>}
    </>
  );
};

export default Address;
