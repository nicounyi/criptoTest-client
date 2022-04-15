import React, { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { getAddressByHash } from "../services/get";

const Address = () => {
  const [textTitle, setTextTitle] = useState("");
  const router = useRouter();
  const [result, setResults] = useState({});

  const getTsxDetail = async (number) => {
    try {
      const { data } = await getAddressByHash(number);
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
  {result.length > 0 ? <>Ha</> : <>No eiste el address </>}
  </>;
};

export default Address;
