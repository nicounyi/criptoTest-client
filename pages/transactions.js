import React, { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { getTsx } from "../services/get";

const Txs = () => {
  const [textTitle, setTextTitle] = useState("");
  const router = useRouter();
  const [result, setResults] = useState({});

  const getTsxDetail = async (number) => {
    try {
      const { data } = await getTsx(number);
      setResults(data);
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
  {result.blockHash ? <>{result.blockHash}</> : <>No eiste el bloque </>}
  </>;
};

export default Txs;
