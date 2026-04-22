import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react';

const Agence = () => {
 const imageDivRef = useRef(null); // it is used to target the image div and apply the parallax effect on it
 gsap.registerPlugin(ScrollTrigger);

 const imgRef = useRef(null);

 const ImageArray = [
  'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
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
    start: 'top 20%',
    end: 'top -70%',
    scrub: 1, //smooth scrubbing with 1s easing 
    pin: true, // it is used to fix the image div in place while scrolling, creating a parallax effect
    pinSpacing:true, 
    pinReparent:true, 
    pinType:'transform',
    anticipatePin:1, 
    invalidateOnRefresh:true ,
    onUpdate: function (elem) {
     console.log(Math.floor(elem.progress * ImageArray.length));

     let imageIndex;
     if (elem.progress < 1) {
      imageIndex = Math.floor(elem.progress * ImageArray.length);
     } else {
      imageIndex = ImageArray.length - 1;
     }
     //  const imageIndex = Math.floor(elem.progress * ImageArray.length);

     imgRef.current.src = ImageArray[imageIndex];
    },
   },
  });
 });

 return (

<div className='parent bg-white text-black'>
    <div id='page1' className='py-1'>
        {/* //Image Div  */}
     <div ref={imageDivRef}  className='absolute overflow-hidden h-[20vw] rounded-3xl w-[15vw] 
      left-[30vw] top-30 bg-blue-900'>
       <img className='h-full object-cover w-full' ref={imgRef} 
       src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
     </div>
     {/* Text Div */}
     <div className='relative font-[font2]'>
     {/* <div className='mt-[55vh]'>
    <h1 className='text-[20vw] text-center uppercase leading-[18vw]'> soixan7e <br /> douze</h1>
     </div> */}
     {/* Paragraph Div */}
     <div className='pl-[40%] mt-20'>
        <p className='text-6xl'>Notre curiosité nourrit notre créativité. 
            On reste humbles et on dit non aux gros egos, même le vôtre. 
            Une marque est vivante. Elle a des valeurs, une personnalité,
             une histoire. Si on oublie ça, on peut faire de bons chiffres à court 
             terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner 
            de la perspective, pour bâtir des marques influentes.</p>
     </div>

     </div>
    </div>

    <div id='page2' className='h-screen'>

    </div>
</div>
 );
};

export default Agence;
