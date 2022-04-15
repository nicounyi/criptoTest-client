import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/img/logo_ripio.svg";
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
            <div className="col-12 col-lg-4">
              <Link
                href={{
                  pathname: "/",
                }}
              >
                <a title="toHome" className="nav-bar__image">
                  <Image
                    src={Logo}
                    alt="Picture of the author"
                    className="img-fluid navBarHeader_logo"
                  />
                </a>
              </Link>
            </div>
            <div className="col-12 col-lg-4 text-xl-end navBarHeader_ethPrice">
              Eth price: {ethPrice}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
