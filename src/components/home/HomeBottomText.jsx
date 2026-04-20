import React from 'react';
import { Link } from 'react-router-dom';

const HomeBottomText = () => {
 return (
  <div className="font-[font1] mb-2 flex items-center justify-center gap-6 ">
   <Link
    to="/projects"
    className="hover:border-[#cfed52] hover:text-[#cfed52] text-[6.5vw] leading-[0.8] pt-6 font-[font2] uppercase border-3 rounded-full  px-8 "
   >
    Projets
   </Link>
   <Link
    to="/agence"
    className="hover:border-[#cfed52] hover:text-[#cfed52] text-[6.5vw] leading-[0.8] pt-6  font-[font2] uppercase border-3 rounded-full px-8   "
   >
    Agence
   </Link>
  </div>
 );
};

export default HomeBottomText;
