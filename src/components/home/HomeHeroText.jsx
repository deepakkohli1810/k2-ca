import React from 'react';
import Video from './Video';

const HomeHeroText = () => {
 return (
  <div className="font-[font1] pt-4">
   <div className="text-[9.5vw] uppercase leading-[8.5vw] text-center flex items-center justify-center">
    L'étincelle
   </div>
   <div className="text-[9.5vw] uppercase leading-[8.5vw] text-center flex items-center justify-center">
    qui
    <div className="h-[7.2vw] w-[16vw] rounded-[8vw] overflow-hidden mb-4 ">
     <Video className="h-full w-full rounded-4xl object-cover " />
    </div>
    génère
   </div>
   <div className="text-[9.5vw] uppercase leading-[8.5vw] text-center flex items-center justify-center">
    la créativité
   </div>
  </div>
 );
};

export default HomeHeroText;
