'use client'
import Image from "next/image";
import localFont from "next/font/local";
const basteleur = localFont({ src: "../Basteleur-Bold.woff2" });

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Project({ headFont }) {

  const target = useRef(null)
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.header',
        scroller: 'main'
      }
    })

    tl.fromTo(target.current.querySelectorAll('.header'), {
      y: 50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1.1,
      stagger: 0.1,
      ease: "elastic.out(1,0.75)",
    })

  });





  return (
    <div ref={target} className="dreamemberHead h-screen text-gray-200 bg-white p-2 grid grid-cols-4 grid-rows-8 gap-1 relative">
      <div className="col-span-4 row-span-1 col-start-1 flex flex-row text-5xl text-orange-400 justify-center items-end pb-2">
        <p className={`header ${basteleur.className}`}>D</p>
        <p className={`header ${basteleur.className}`}>r</p>
        <p className={`header ${basteleur.className}`}>e</p>
        <p className={`header ${basteleur.className}`}>a</p>
        <p className={`header ${basteleur.className}`}>m</p>
        <p className={`header ${basteleur.className}`}>e</p>
        <p className={`header ${basteleur.className}`}>m</p>
        <p className={`header ${basteleur.className}`}>b</p>
        <p className={`header ${basteleur.className}`}>e</p>
        <p className={`header ${basteleur.className}`}>r</p>
      </div>
      <div className="col-span-4 row-span-1 row-start-2 col-start-1 px-3 text-justify">
        <text className="text-black text-xl">
          I designed and developed a dream archiving application that makes
          dream journalling fully digital.
        </text>
      </div>
      <div className="col-span-3 row-span-2 row-start-3 relative">
        <Image
          fill={true}
          alt="dreamember"
          className="rounded-tl-3xl "
          objectFit="cover"
          src="/dreamemberCropped.png"
        />
      </div>
      <div className="col-span-1 row-start-3 col-start-4 relative">
        <Image
          fill={true}
          alt="dreamember"
          className="rounded-tr-3xl"
          objectFit="cover"
          unoptimized={true}
          src="/dreamemberAccordian.gif"
        />
      </div>
      <div className="col-span-1 row-start-4 col-start-4 relative">
        <Image
          fill={true}
          alt="dreamember"
          className=""
          objectFit="cover"
          src="/dreamemberReview.png"
        />
      </div>

      {/* Second Row */}

      <div className="col-span-4 row-span-2 row-start-5 col-start-1 relative">
        <Image
          fill={true}
          alt="dreamember"
          className=""
          objectFit="cover"
          src="/dreamemberAdmin.png"
        />
      </div>
      <div className="col-span-1 row-start-7 col-start-1  relative">
        <Image
          fill={true}
          alt="dreamember"
          className="rounded-bl-3xl"
          objectFit="cover"
          unoptimized={true}
          src="/dreamemberSlider.gif"
        />
      </div>
      <div className="col-span-1 row-start-7 col-start-2 relative">
        <Image
          fill={true}
          alt="dreamember"
          className=""
          objectFit="cover"
          src="/dreamemberTag.png"
        />
      </div>
      <div className="col-span-2 row-start-7 col-start-3 relative">
        <Image
          fill={true}
          alt="dreamember"
          className="rounded-br-3xl"
          objectFit="cover"
          unoptimized={true}
          src="/dreamemberArchiveCropped.gif"
        />
      </div>
      <div className="col-span-2 row-span-1 row-start-8 col-start-2 flex justify-center py-1">
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-orange-800 bg-orange-500 px-3 font-medium text-neutral-900 transition-all [box-shadow:0px_4px_1px_rgb(82_82_82)] active:translate-y-[2px] active:shadow-none">
          Read More
        </button>
      </div>
    </div >
  );
}
