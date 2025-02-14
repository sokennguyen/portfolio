import Image from "next/image";
import localFont from "next/font/local";
const headerFont = localFont({ src: "../../public/fonts/ChangaOne-Regular.ttf" });
import TechItemList from "./TechItemList";

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
        start: "top 90%",
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
    <div className="thesis h-screen text-gray-200 bg-white px-5 grid grid-cols-1 grid-rows-12 gap-0 lg:grid-cols-3 lg:grid-rows-1 lg:py-10 lg:px-20 lg:gap-20">
      <div className="col-span-1 row-span-2 row-start-1 col-start-1 flex flex-col justify-center items-end space-y-1 lg:hidden">
        <div className={`${headerFont.className} relative z-0`}>
          <div className="reveal highlight highlight-variant-6 highlight-yellow-300 text-5xl text-black">Performance</div>
          <div className="hide text-5xl text-black z-10 inset-0 absolute">Performance</div>
        </div>
        <div className={`${headerFont.className} relative z-0`}>
          <div className="reveal highlight highlight-variant-8 highlight-yellow-300 text-5xl text-black">Research</div>
          <div className="hide text-5xl text-black z-10 inset-0 absolute">Research</div>
        </div>
      </div>
      <div className="row-span-6 row-start-3 col-span-1 col-start-1 relative lg:col-span-1 lg:col-start-1 lg:row-start-1 lg:row-span-1 ">
        <Image
          fill={true}
          alt="project screenshot"
          objectFit="cover"
          objectPosition="top"
          className="border-2 border-black rounded-xl shadow-2xl"
          src="/avg-hover.png"
        />
      </div>
      <div className="col-span-1 row-span-3 col-start-1 flex items-center text-justify row-start-9 pt-4 lg:hidden">
        <text className="text-black text-xl ">
          As a product tester at a developer tool startup, I helped to build a
          more production ready product through finding bugs and creating
          solutions for them.
        </text>
      </div>
      <div className="reveal col-span-1 row-span-1 row-start-12 col-start-1 flex justify-start items-start lg:hidden">
        <button className="highlight highlight-yellow-300 highlight-variant-4 h-16 w-32 flex items-center justify-center text-black text-xl font-medium">
          Read More
        </button>
      </div>

      {/*laptop viewport description layout*/}
      <div className="hidden col-span-1 row-span-1 row-start-1 col-start-2 lg:flex flex-col justify-end items-start space-y-28 text-9xl">
        <div className={`${headerFont.className} relative z-0`}>
          <div className="reveal highlight highlight-variant-6 highlight-yellow-300 text-black">Page</div>
          <div className="hide text-black z-10 inset-0 absolute">Page</div>
        </div>
        <div className={`${headerFont.className} relative z-0`}>
          <div className="reveal highlight highlight-variant-8 highlight-yellow-300 text-black">Speed</div>
          <div className="hide  text-black z-10 inset-0 absolute">Speed</div>
        </div>
        <div className={`${headerFont.className} relative z-0`}>
          <div className="reveal highlight highlight-variant-3 highlight-yellow-300  text-black">Research</div>
          <div className="hide  text-black z-10 inset-0 absolute">Research</div>
        </div>
      </div>
      <div className="hidden lg:flex flex-col col-span-1 col-start-3 row-span-1 row-start-1 items-center justify-end">
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col space-y-4 justify-end">
            <text className="text-black text-2xl text-start flex items-end">
              As a product tester at a developer tool startup, I helped to build a
              more production ready product through finding bugs and creating
              solutions for them.
            </text>
            <div className="reveal col-span-1 row-span-1 row-start-12 col-start-1 flex justify-start items-start">
              <button className="highlight highlight-yellow-300 highlight-variant-4 h-16 w-32 flex items-center justify-center text-black text-xl font-medium">
                Read More
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-7">
            <p className={`header ${headerFont.className} text-5xl flex items-center text-yellow-400  font-bold `} >
              made with
            </p>
            <div className="flex flex-col space-y-5">
              <TechItemList iconSrc={'/golang.png'} name={'Golang'} size={'3xl'} />
              <TechItemList iconSrc={'/nginx.png'} name={'Nginx'} size={'3xl'} />
              <TechItemList iconSrc={'/sqlite.jpg'} name={'SQLite'} size={'3xl'} />
              <TechItemList iconSrc={'/azure.jpg'} name={'Azure'} size={'3xl'} />
              <div className="flex flex-row space-x-1">
                <div className="flex flex-col items-center -space-y-2 overflow-hidden">
                  <Image
                    height={40}
                    width={40}
                    className="inline-block size-8 rounded-full "
                    src={'/js.png'}
                    alt={`js-icon`}
                  />
                  <div className="flex -space-x-2 overflow-hidden">
                    <Image
                      height={40}
                      width={40}
                      className="inline-block size-8 rounded-full "
                      src={'/css-3.png'}
                      alt={`js-icon`}
                    />
                    <Image
                      height={40}
                      width={40}
                      className="inline-block size-8 rounded-full "
                      src={'/html-5.png'}
                      alt={`js-icon`}
                    />
                  </div>
                </div>
                <p className={`text-xl flex items-center text-black font-medium`}>Vanilla JS/HTML/CSS</p>
              </div >
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
