import React from "react";
import { Link } from "react-router-dom";

const LinkGroup = ({ title, links }) => (
  <div className="flex flex-col">
    <h4 className="font-semibold mb-3 lg:text-lg">{title}</h4>
    <ul>
      {links.map((link, index) => (
        <li key={index} className="hover:text-gray-600 lg:text-lg">
          <Link to={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default LinkGroup;
