import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/img/logo_ripio.svg";

const Header = () => {
  return (
    <>
      <header className="container-fluid py-4 mt-3 navBarHeader">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-lg-4">
              <Image
                src={Logo}
                alt="Picture of the author"
                className="img-fluid navBarHeader_logo"
              />
            </div>
            <div className="col-12 col-lg-4 text-xl-end navBarHeader_ethPrice">
                Eth price: 
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
