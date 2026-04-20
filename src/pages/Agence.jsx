import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react';

const Agence = () => {
 const imageDivRef = useRef(null); // it is used to target the image div and apply the parallax effect on it
 gsap.registerPlugin(ScrollTrigger);
 const imgRef = useRef(null);

 const ImageArray = [
  ' https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64 ',
  'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
  'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
  'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6',
  'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
  'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
  'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6',
  'https://k72.ca/images/teamMembers/SebR_640X960.jpg?w=640&h=960&s=81dfdbd4b658503ba32862901a1ea3ca',
 ];

 useGSAP(function () {
  gsap.to(imageDivRef.current, {
   scrollTrigger: {
    trigger: imageDivRef.current,
    markers: true,
    start: 'top 19.2%',
    end: 'top -80%',
    scrub: true,
    pin: true, // it is used to fix the image div in place while scrolling, creating a parallax effect
    onUpdate: function (elem) {
     console.log(elem.progress * ImageArray.length);
    },
   },
  });
 });

 return (
  <div>
   {/* Section 1  */}
   <div className="section1 ">
    {/* Image Div */}
    <div
     ref={imageDivRef}
     className="absolute w-[15vw] overflow-hidden rounded-4xl  h-[20vw]   top-44 left-140 z "
    >
     <img
      ref={imgRef}
      className="w-full h-full object-cover"
      src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
      alt=""
     />
    </div>

    {/* Text div  */}
    <div className="relative">
     <div className="font-[font2] mt-[53vh]">
      <h1 className="text-[20vw] text-center leading-[18vw] uppercase ">
       Soixan7e <br />
       Douze
      </h1>
     </div>

     <div className="pl-[40%] font-[font2]">
      <p className="text-5xl  ">
       &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On
       reste humbles et on dit non aux gros egos, même le vôtre. Une marque est
       vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie
       ça, on peut faire de bons chiffres à court terme, mais on la tue à long
       terme. C’est pour ça qu’on s’engage à donner de la perspective, pour
       bâtir des marques influentes.
      </p>
     </div>
    </div>
   </div>

   {/* Section 2  */}
   <div className="section2 h-screen "></div>
  </div>
 );
};

export default Agence;
