import React, { useRef } from 'react'
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import { useLocation } from 'react-router-dom';

const Stairs = (props) => {
 const stairsParent = useRef(null)
 const currentPath = useLocation().pathname
 const pageRef = useRef(null)
 console.log(props.children)

useGSAP(function() {
  const tl = gsap.timeline()
   tl.to(stairsParent.current ,
    {
    display:'block'
   }
   )
  tl.from('.stairs' , {
    height:0 ,
    stagger: {
      amount: -0.23
    }
  })
   tl.to('.stairs' ,{
    y:"100%",
      stagger: {
      amount: -0.23
    }
   })
   tl.to(stairsParent.current ,
    {
    display:'none'
   })

   tl.to('.stairs' ,{
    y:"0%"
   })
   
   gsap.from(pageRef.current, {
    opacity:0, 
    delay:1.3,
    scale:1.2
   })
} , [currentPath])


  return (
   
    <div className='text-white'>
        
          <div
        ref={stairsParent}
        className="h-screen w-full fixed top-0 z-20"
      >
        <div className="h-full w-full flex">
          <div className="stairs w-1/5 h-full bg-black"></div>
          <div className="stairs w-1/5 h-full bg-black"></div>
          <div className="stairs w-1/5 h-full bg-black"></div>
          <div className="stairs w-1/5 h-full bg-black"></div>
          <div className="stairs w-1/5 h-full bg-black"></div>
        </div>
      </div>
      <div ref={pageRef}>
        {props.children}
      </div>

    </div>
    
  )
}

export default Stairs