import React, { useContext } from 'react'
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import { useHref, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { NavbarContext } from '../../context/NavContext';

const FullScreenNav = () => {
  
  const fullNavLinkRef = useRef(null)
 const [navOpen , setNavOpen] = useContext(NavbarContext)
 const fullScreenRef = useRef(null)

  useGSAP(function() {
  const tl = gsap.timeline()

tl.from('.staired' , {
  scaleY:0 , // Bars grow from center 
  transformOrigin:"center",
  duration:0.8, 
  stagger:{
    amount:0.2,
    from:"center"
  },
  ease:"power2.inOut"
})

   tl.from(fullNavLinkRef.current, {
     opacity: 0,
      y: 50, // Slide up slightly
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.4")


   tl.from('.link', {
      opacity: 0,
      rotateX: 90,
      transformOrigin: "top center",
      stagger: 0.1,
      duration: 0.6,
      ease: "back.out(1.7)"
    }, "-=0.3")


  //  tl.pause()


  // Handles Open/Close logic 
   if(navOpen){
    fullScreenRef.current.style.display ='block' ;
    tl.play();
   }else
    // Reverse the timeline when closing 
   tl.reverse().then(() => {
         // Optional: Hide display none after reverse completes to prevent interaction when closed
         if(!navOpen) fullScreenRef.current.style.display = 'none';
      });

   
} , [navOpen] )

  return (
    <div  ref={fullScreenRef} id='fullScreenNav' className='hidden z-50  h-screen overflow-x-hidden overflow-y-hidden w-full  absolute black'>
       
       <div  className='h-screen w-full fixed '>
       <div className="h-full w-full flex">
          <div className="staired w-1/5 h-full bg-black"></div>
          <div className="staired w-1/5 h-full bg-black"></div>
          <div className="staired w-1/5 h-full bg-black"></div>
          <div className="staired w-1/5 h-full bg-black"></div>
          <div className="staired w-1/5 h-full bg-black"></div>
        </div>
       </div>
       
       <div ref={fullNavLinkRef} className='relative' >
        <div className="flex w-full justify-between p-3 items-start">
        {/* SVG DIV IS DOWN */}
          <div className='w-31   text-white'>
            <svg className='w-full h-full ' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 103 44">
        <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
        </svg>
        </div>
        <div className='h-32 w-32 relative cursor-pointer ' onClick={() => setNavOpen(false)}>
             <div className='h-42 absolute  w-1 origin-top -rotate-45 bg-[#cfed52]'></div>
             <div className='h-42 absolute right-0 w-1 origin-top rotate-45 bg-[#cfed52]'></div>


             <div></div>
        </div>
       </div>
        <div id='all-links' className=''>
            <div className='link origin-top relative border-t border-white'>

                <h1 className=' font-[font2] leading-[0.8] text-center pt-8 text-[8vw] uppercase'>Projets</h1>
                <div className='moveLink absolute flex top-0 bg-[#cfed52] text-black'>

                   <div className=' moveX flex items-center'>
                     <h2 className='whitespace-nowrap  font-[font2] leading-[0.8] text-center pt-10 text-[8vw] 
                     uppercase'>pour tour voir</h2>
                    <img className='h-28 rounded-full shrink-0 w-80 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                  <h2 className=' whitespace-nowrap font-[font2] leading-[0.8] text-center pt-10 text-[8vw]
                   uppercase'>pour tour voir</h2>
                     <img className='h-28 rounded-full shrink-0 w-80 object-cover' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                
                   </div>

                   <div className=' moveX flex items-center'>
                     <h2 className='whitespace-nowrap  font-[font2] leading-[0.8] text-center pt-10 text-[8vw] 
                     uppercase'>pour tour voir</h2>
                    <img className='h-28 rounded-full shrink-0 w-80 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                  <h2 className=' whitespace-nowrap font-[font2] leading-[0.8] text-center pt-10 text-[8vw]
                   uppercase'>pour tour voir</h2>
                     <img className='h-28 rounded-full shrink-0 w-80 object-cover' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                
                   </div>

                </div>
            </div>
                   <div className='link origin-top  relative border-t border-white'>

                <h1 className=' font-[font2]  leading-[0.8] text-center pt-10 text-[8vw] uppercase'>Agence</h1>
                <div className='moveLink absolute flex top-0  bg-[#cfed52] text-black'>

                   <div className=' moveX flex items-center'>
                     <h2 className='whitespace-nowrap  font-[font2] leading-[0.8] text-center pt-10 text-[8vw] 
                     uppercase'>pour tour voir</h2>
                    <img className='h-28 rounded-full shrink-0 w-80 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                  <h2 className=' whitespace-nowrap font-[font2] leading-[0.8] text-center pt-10 text-[8vw]
                   uppercase'>pour tour voir</h2>
                     <img className='h-28 rounded-full shrink-0 w-80 object-cover' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                
                   </div>

                   <div className=' moveX flex items-center'>
                     <h2 className='whitespace-nowrap  font-[font2] leading-[0.8] text-center pt-10 text-[8vw] 
                     uppercase'>pour tour voir</h2>
                    <img className='h-28 rounded-full shrink-0 w-80 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                  <h2 className=' whitespace-nowrap font-[font2] leading-[0.8] text-center pt-10 text-[8vw]
                   uppercase'>pour tour voir</h2>
                     <img className='h-28 rounded-full shrink-0 w-80 object-cover' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                
                   </div>

                </div>
            </div>
                   <div className='link origin-top  relative border-t border-white'>

                <h1 className=' font-[font2] leading-[0.8] text-center pt-10 text-[8vw] uppercase'>Contact</h1>
                <div className='moveLink absolute flex top-0 bg-[#cfed52] text-black'>

                   <div className=' moveX flex items-center'>
                     <h2 className='whitespace-nowrap  font-[font2] leading-[0.8] text-center pt-10 text-[8vw] 
                     uppercase'>pour tour voir</h2>
                    <img className='h-28 rounded-full shrink-0 w-80 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                  <h2 className=' whitespace-nowrap font-[font2] leading-[0.8] text-center pt-10 text-[8vw]
                   uppercase'>pour tour voir</h2>
                     <img className='h-28 rounded-full shrink-0 w-80 object-cover' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                
                   </div>

                   <div className=' moveX flex items-center'>
                     <h2 className='whitespace-nowrap  font-[font2] leading-[0.8] text-center pt-10 text-[8vw] 
                     uppercase'>pour tour voir</h2>
                    <img className='h-28 rounded-full shrink-0 w-80 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                  <h2 className=' whitespace-nowrap font-[font2] leading-[0.8] text-center pt-10 text-[8vw]
                   uppercase'>pour tour voir</h2>
                     <img className='h-28 rounded-full shrink-0 w-80 object-cover' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                
                   </div>

                </div>
            </div>
                   <div className='link origin-top  relative border-y border-white'>

                <h1 className=' font-[font2] leading-[0.8] text-center pt-10 text-[8vw] uppercase'>blogue</h1>
                <div className='moveLink absolute flex top-0 bg-[#cfed52] text-black'>

                   <div className=' moveX flex items-center'>
                     <h2 className='whitespace-nowrap  font-[font2] leading-[0.8] text-center pt-10 text-[8vw] 
                     uppercase'>pour tour voir</h2>
                    <img className='h-28 rounded-full shrink-0 w-80 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                  <h2 className=' whitespace-nowrap font-[font2] leading-[0.8] text-center pt-10 text-[8vw]
                   uppercase'>pour tour voir</h2>
                     <img className='h-28 rounded-full shrink-0 w-80 object-cover' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                
                   </div>

                   <div className=' moveX flex items-center'>
                     <h2 className='whitespace-nowrap  font-[font2] leading-[0.8] text-center pt-10 text-[8vw] 
                     uppercase'>pour tour voir</h2>
                    <img className='h-28 rounded-full shrink-0 w-80 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                  <h2 className=' whitespace-nowrap font-[font2] leading-[0.8] text-center pt-10 text-[8vw]
                   uppercase'>pour tour voir</h2>
                     <img className='h-28 rounded-full shrink-0 w-80 object-cover' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                
                   </div>

                </div>
            </div>
            
            
          
        </div>

       </div>

    </div>
  )
}

export default FullScreenNav