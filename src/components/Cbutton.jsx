import React from "react";
import { Link } from "react-router-dom";
const Cbutton = ({ styles }) => (
  <Link to= "/catalogo" type="button" className={`py-2 px-4 font-poppins font-medium text-[14px] border-2 border-zinc-400  text-white bg-green-800 rounded-[10px] outline-none ${styles}`}>
   Ver catalogo
  </Link>
);

export default Cbutton;
