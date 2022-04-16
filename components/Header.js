import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/img/logo_ripio.svg";
import Eth from "../assets/img/eth_logo.png";
import { getPrice } from "../services/get";

const Header = () => {
  const [ethPrice, setEthPrice] = useState();

  useEffect(() => {
    getActualPrice();
  }, []);

  const getActualPrice = async () => {
    const res = await getPrice();
    setEthPrice(res.USD);
  };

  return (
    <>
      <header className="container-fluid py-4 mt-3 navBarHeader">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-lg-5">
              <Link
                href={{
                  pathname: "/",
                }}
              >
                <a title="toHome" className="nav-bar__image">
                  <Image
                    src={Logo}
                    alt="Logo"
                    className="img-fluid navBarHeader_logo"
                  />
                </a>
              </Link>
            </div>
            <div className="col-12 col-lg-4 text-xl-end navBarHeader_ethPrice">
              <div className="navBarHeader_ethPrice-content">
              <Image
                    src={Eth}
                    alt="Eth"
                    className="img-fluid navBarHeader_ethlogo"
                  /> <span>{ethPrice}</span>
              </div>
           
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
