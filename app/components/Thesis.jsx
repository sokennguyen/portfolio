import Image from "next/image";
import localFont from "next/font/local";
const headerFont = localFont({ src: "../../public/fonts/ChangaOne-Regular.ttf" });

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Project({ headFont }) {

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.thesis',
        scroller: 'main',
        start: "top 10%",
        markers: true,
      }
    })

    tl.fromTo('.reveal', {
      clipPath: "inset(0% 100% 0% 0%)", // Hide from right
    }, {
      clipPath: "inset(0% 0% 0% 0%)", // Reveal fully
      stagger: 0.35,
      duration: 1,
    });

    tl.fromTo('.hide', {
      clipPath: "inset(0% 0% 0% 0%)", // Reveal fully
    }, {
      clipPath: "inset(0% 0% 0% 100%)", // Hide from left
      duration: 1,
    });
  });


  return (
    <div className="thesis h-screen text-gray-200 bg-white px-5 grid grid-cols-1 grid-rows-12 gap-0">
      <div className="col-span-1 row-span-2 row-start-1 col-start-1 flex flex-col justify-center items-end space-y-1">
        <div className={`${headerFont.className} relative z-0`}>
          <div className="reveal highlight highlight-variant-6 highlight-yellow-300 text-5xl text-black">Performance</div>
          <div className="hide text-5xl text-black z-10 inset-0 absolute">Performance</div>
        </div>
        <div className={`${headerFont.className} relative z-0`}>
          <div className="reveal highlight highlight-variant-8 highlight-yellow-300 text-5xl text-black">Research</div>
          <div className="hide text-5xl text-black z-10 inset-0 absolute">Research</div>
        </div>
      </div>
      <div className="row-span-6 row-start-3 col-span-1 col-start-1 relative ">
        <Image
          fill={true}
          alt="hiku wireframe"
          objectFit="cover"
          objectPosition="top"
          className="border-2 border-black rounded-xl shadow-2xl"
          src="/avg-hover.png"
        />
      </div>
      <div className="col-span-1 row-span-3 col-start-1 flex items-center text-justify row-start-9 pt-4">
        <text className="text-black text-xl ">
          As a product tester at a developer tool startup, I helped to build a
          more production ready product through finding bugs and creating
          solutions for them.
        </text>
      </div>
      <div className="reveal col-span-1 row-span-1 row-start-12 col-start-1 flex justify-start items-start">
        <button className="highlight highlight-yellow-300 highlight-variant-4 h-16 w-32 flex items-center justify-center text-black text-xl font-medium">
          Read More
        </button>
      </div>
    </div >
  );
}
