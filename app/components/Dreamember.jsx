'use client'
import Image from "next/image";
import localFont from "next/font/local";
const basteleur = localFont({ src: "../Basteleur-Bold.woff2" });
import TechItemList from "./TechItemList";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Dreamember({ headFont }) {

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
    <div ref={target} className="dreamemberHead h-screen text-gray-200 bg-white p-2 grid grid-cols-4  grid-rows-8 gap-1 relative lg:grid-cols-11 lg:grid-rows-5 lg:gap-5">
      <div className="col-span-4 row-span-1 col-start-1 flex flex-row text-5xl text-orange-400 justify-center items-end pb-2 lg:-rotate-90 lg:col-span-1 lg:col-start-5 lg:row-span-5 lg:row-start-1 lg:text-9xl lg:items-center">
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
      <div className="col-span-4 row-span-1 row-start-2 col-start-1 px-3 text-justify lg:text-end lg:col-span-4 lg:flex lg:items-end ">
        <text className="text-black text-xl lg:text-2xl ">
          I designed and developed a dream archiving application that makes
          dream journalling fully digital.
        </text>
      </div>
      <div className="col-span-3 row-span-2 row-start-3 relative lg:col-span-4 lg:col-start-6 lg:row-span-2 lg:row-start-2">
        <Image
          fill={true}
          alt="dreamember"
          className="rounded-tl-3xl lg:rounded-xl"
          objectFit="cover"
          src="/dreamemberCropped.png"
        />
      </div>
      <div className="col-span-1 row-start-3 col-start-4 relative lg:row-span-3 lg:row-start-3 lg:col-span-3 lg:col-start-2 ">
        <Image
          fill={true}
          alt="dreamember"
          className="rounded-tr-3xl lg:rounded-xl"
          objectFit="cover"
          unoptimized={true}
          src="/dreamemberAccordian.gif"
        />
      </div>
      <div className="col-span-1 row-start-4 col-start-4 relative lg:hidden">
        <Image
          fill={true}
          alt="dreamember"
          className=""
          objectFit="cover"
          src="/dreamemberReview.png"
        />
      </div>

      {/* Second Row */}

      <div className="col-span-4 row-span-2 row-start-5 col-start-1 relative lg:hidden">
        <Image
          fill={true}
          alt="dreamember"
          className=""
          objectFit="cover"
          src="/dreamemberAdmin.png"
        />
      </div>
      <div className="col-span-1 row-start-7 col-start-1  relative lg:row-start-1 lg:row-span-1 lg:col-start-6 lg:col-span-2">
        <Image
          fill={true}
          alt="dreamember"
          className="rounded-bl-3xl lg:rounded-xl"
          objectFit="cover"
          unoptimized={true}
          src="/dreamemberSlider.gif"
        />
      </div>
      <div className="col-span-1 row-start-7 col-start-2 relative lg:row-start-1 lg:row-span-1 lg:col-start-8 lg:col-span-2">
        <Image
          fill={true}
          alt="dreamember"
          className="lg:rounded-xl lg:object-[20%_80%]"
          objectFit="cover"
          src="/dreamemberTag.png"
        />
      </div>
      <div className="col-span-2 row-start-7 col-start-3 relative lg:row-start-4 lg:row-span-2 lg:col-start-6 lg:col-span-4">
        <Image
          fill={true}
          alt="dreamember"
          className="rounded-br-3xl lg:rounded-xl"
          objectFit="cover"
          unoptimized={true}
          src="/dreamemberArchiveCropped.gif"
        />
      </div>
      <div className="col-span-2 row-span-1 row-start-8 col-start-2 flex justify-center py-1 lg:row-start-5 lg:col-start-11 lg:hidden">
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-orange-800 bg-orange-500 px-3 font-medium text-neutral-900 transition-all [box-shadow:0px_4px_1px_rgb(82_82_82)] active:translate-y-[2px] active:shadow-none">
          Read More
        </button>
      </div>

      <div className="hidden lg:flex flex-col justify-end py-1 row-span-5 row-start-1 col-span-2 col-start-10 space-y-5">
        <p className={`header ${basteleur.className} text-5xl flex items-center text-orange-400 font-bold `} >
          made with
        </p>
        <div className="flex flex-col space-y-5">
          <TechItemList iconSrc={'/nextjs.png'} name={'Next.js'} size={'3xl'} />
          <TechItemList iconSrc={'/daisyui.png'} name={'daisyUI'} size={'3xl'} />
          <TechItemList iconSrc={'/mongo.png'} name={'MongoDB'} size={'3xl'} />
          <TechItemList iconSrc={'/cloudflare.png'} name={'Cloudflare'} size={'3xl'} />
        </div>
        <button className="group relative inline-flex w-32 h-16 items-center justify-center overflow-hidden rounded-md border border-orange-800 bg-orange-500 px-3 font-medium text-neutral-900 transition-all [box-shadow:0px_4px_1px_rgb(82_82_82)] active:translate-y-[2px] active:shadow-none">
          Read More
        </button>
      </div>
    </div >
  );
}
