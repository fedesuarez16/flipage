import React from "react";
import { Link } from "react-router-dom";

const Button = ({ styles }) => (
  <a  href="#contact" type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-white bg-green-700 rounded-[10px] outline-none ${styles}`}>
   Contactar  →
  </a>
);

export default Button;
