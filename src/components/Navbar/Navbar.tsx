import React from "react";
import { TbArrowBigLeftLineFilled } from "react-icons/tb";
import NavbarCSS from "./Navbar.module.css";
import { INavbarProps } from "../../utils/Interface/interface";
import { RiRestartFill } from "react-icons/ri";
import logo from "../../assets/QUIZ.png";
import { Link } from "react-router-dom";

const Navbar: React.FC<INavbarProps> = ({
  preaviusQuestion,
  restartGame,
}): JSX.Element => {
  return (
    <>
      <Link to="/">
        <img className={NavbarCSS.logo} src={logo} alt="" />
      </Link>
      <nav className={NavbarCSS.nav}>
        
        <button onClick={preaviusQuestion}>
          <TbArrowBigLeftLineFilled />
        </button>
        <button onClick={restartGame}>
          <RiRestartFill />
        </button>
      </nav>
    </>
  );
};

export default Navbar;




