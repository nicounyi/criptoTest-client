import React, { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { getNewBlock } from "../services/get";

const Home = () => {
  const [textTitle, setTextTitle] = useState("");
  const router = useRouter();
  const [result, setResults] = useState({});

  const getBlocks = async (number) => {
    try {
      const { data } = await getNewBlock(number);
      setResults(data);
    } catch (error) {
      setResults(error);
      console.error(error);
    }
  };

  useEffect(() => {
    router.query && setTextTitle(router.query.search);
    router.query.search && getBlocks(router.query.search);
  }, [router.query.search]);

  return <>{result.miner ? <>{result.miner}</> : <>No eiste el bloque </>}</>;
};

export default Home;
