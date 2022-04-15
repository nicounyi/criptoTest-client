import React, { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { getNewBlock } from "../services/get";
import Link from "next/link";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const Home = () => {
  const [textTitle, setTextTitle] = useState("");
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();
  const [result, setResults] = useState({});
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const getBlocks = async (number) => {
    try {
      const { data } = await getNewBlock(number);
      setResults(data);
      setLoading(false);
    } catch (error) {
      setResults(error);
      console.error(error);
    }
  };

  useEffect(() => {
    router.query && setTextTitle(router.query.search);
    router.query.search && getBlocks(router.query.search);
  }, [router.query.search]);

  return (
    <>
      {isLoading && <div>Cargando bloque</div>}
      {result.miner && (
        <div className="tableInfo">
          <table className="table table-striped">
            <tbody>
              <tr>
                <th>Numero de bloque:</th>
                <td>{result.blockNumber}</td>
              </tr>
              <tr>
                <th>Minero:</th>
                <td>
                  <Link
                    href={{
                      pathname: "/address",
                      query: { search: result.miner },
                    }}
                  >
                    <a className="tableInfo__link">{result.miner}</a>
                  </Link>
                </td>
              </tr>
              <tr>
                <th>Hora:</th>
                <td>{result.time}</td>
              </tr>
              <tr>
                <th>Cantidad de Transacciones:</th>
                <td>
                  {result.transactionsQuantity}
                  <button
                    type="button"
                    onClick={onOpenModal}
                    className="btn btn-light"
                  >
                    Ver
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <Modal open={open} onClose={onCloseModal} center>
            <h4 className="mb-4">Transacciones en el bloque: {result.blockNumber}</h4>
            <table className="table table-striped">
              <tbody>
                {result.transactions.map((item) => (
                  <>
                    <tr>
                      <th className="tableInfo__hash">{item}</th>
                      <td>
                        <Link
                          href={{
                            pathname: "/transactions",
                            query: { search: item },
                          }}
                        >
                          <a className="tableInfo__link">Ver</a>
                        </Link>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </Modal>
        </div>
      )}
    </>
  );
};

export default Home;
