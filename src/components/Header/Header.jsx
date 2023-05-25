import Container from "../UI/Container/Container";
import "./Header.scss";
import headerLogo from "../../assets/img/headerLogo.svg";
import headerTitle from "../../assets/img/headerTitle.svg";

import headerLogoMob from "../../assets/img/headerLogoMob.svg";
import headerTitleMob from "../../assets/img/headerTitleMob.svg";
import { useEffect, useState } from "react";

const Header = ({ windowSize }) => {
  const headerImageSize = windowSize.width > 420 ? headerLogo : headerLogoMob;
  const headerTitleSize = windowSize.width > 420 ? headerTitle : headerTitleMob;

  console.log(windowSize.width > 420);

  return (
    <div className="header">
      <Container>
        <div className="header-content flex justify-between py-12 ">
          <div className="header-logo flex items-start ">
            <img src={headerImageSize} alt="headerLogo" className="mr-3" />
            <img src={headerTitleSize} alt="headerTitle" />
          </div>
          <div className="header-cta">
            <a href="#" className="md:mr-12 mr-3 text-sm text-bold md:text-xl">
              Abou us
            </a>
            <button className="bg-black py-3 px-4 text-bold text-white text-sm md:text-xl rounded hover:bg-stone-800">
              Sign-up
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
