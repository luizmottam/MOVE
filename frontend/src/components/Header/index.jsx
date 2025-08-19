// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import { linksNav } from "./header.config";

const Header = () => (
  <header className="">
    <div className="flex items-center gap-3">
      <img className="h-[2.5rem]" src="favicon.svg" alt="" />
      <h1 className="font-bold text-3xl">M.O.V.E</h1>
    </div>
    <nav>
      <ul>

      </ul>
    </nav>
    <div></div>
  </header>
);

export default Header;
