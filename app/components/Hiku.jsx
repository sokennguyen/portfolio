import Image from "next/image";
import localFont from "next/font/local";
const headerFont = localFont({ src: "../../public/fonts/ChangaOne-Regular.ttf" });
import TechItemList from "./TechItemList";

export default function Project({ headFont }) {
  return (
    <div className="h-screen text-gray-200 bg-blue-300 p-5 grid grid-cols-6 grid-rows-12 gap-0 lg:grid-cols-2 lg:grid-rows-1 ">
      <div className="col-span-1 row-span-1 row-start-1 col-start-1 pt-2 flex items-end justify-end relative lg:hidden">
        <Image
          fill={true}
          alt="hiku icon"
          className="rounded-xl "
          objectFit="contain"
          src="/hiku-favi.png"
        />
      </div>
      <div className="col-span-6 row-span-1 row-start-2 col-start-1 flex flex-col justify-start items-start space-y-4 lg:hidden">
        <text className={headerFont.className}>
          <div className="text-5xl text-teal-700">Hiku Dev</div>
        </text>
        <text className="text-black text-xl">
          As a product tester at a developer tool startup, I helped to build a
          more production ready product through finding bugs and creating
          solutions for them.
        </text>
      </div>

      {/*laptop viewport layout*/}
      <div className="hidden col-span-1 row-span-1 row-start-1 col-start-1 lg:flex flex-col justify-center items-start px-24">
        <div className={`flex flex-row relative justify-between items-center space-x-2`}>
          <Image
            width={90}
            height={90}
            alt="hiku-icon"
            className=""
            src="/hiku-favi.png"
          />
          <div className={`${headerFont.className} text-7xl text-teal-700`}>
            Hiku Dev
          </div>
        </div>
        <div className="text-black text-2xl col-span-1 col-start-1">
          As a product tester at a developer tool startup, I helped to build a
          more production ready product through finding bugs and creating
          solutions for them.
        </div>
        <div className="w-full">
          <p className={`header ${headerFont.className} text-5xl flex items-center text-teal-700 font-bold py-8`} >
            worked with
          </p>
          <div className="flex flex-col space-y-10 ">
            <div className="flex space-x-10">
              <TechItemList iconSrc={'/react.png'} extraCss="bg-white rounded-3xl" name={'React.js'} size={'3xl'} />
              <TechItemList iconSrc={'/styled-component.png'} name={'styled-components'} size={'3xl'} />
              <TechItemList iconSrc={'/mysql.png'} name={'MySQL'} size={'3xl'} />
            </div>
            <div className="flex space-x-10">
              <TechItemList iconSrc={'/threejs.png'} name={'Three.js'} size={'3xl'} />
              <TechItemList iconSrc={'/selenium.ico'} name={'Selenium'} size={'3xl'} />
            </div>
          </div>
        </div>
        <div className="pt-8">
          <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-teal-800 bg-teal-500 px-3 font-medium text-neutral-900 transition-all [box-shadow:0px_4px_1px_rgb(82_82_82)] active:translate-y-[2px] active:shadow-none">
            Read More
          </button>
        </div>
      </div >

      <div className="col-span-6 row-span-4 row-start-6 rounded-xl relative overflow-hidden lg:col-span-1 lg:row-span-1 lg:row-start-1 lg:col-start-2">
        <Image
          fill={true}
          alt="hiku wireframe"
          objectFit="contain"
          className="w-full h-full"
          src="/hikuWire.svg"
        />
      </div>
      <div className="col-span-2 row-span-1 row-start-10 col-start-5 lg:hidden">
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-teal-800 bg-teal-500 px-3 font-medium text-neutral-900 transition-all [box-shadow:0px_4px_1px_rgb(82_82_82)] active:translate-y-[2px] active:shadow-none">
          Read More
        </button>
      </div>
    </div >
  );
}
