import Image from "next/image";
import localFont from "next/font/local";
const headerFont = localFont({ src: "../../public/fonts/ChangaOne-Regular.ttf" });

export default function Project({ headFont }) {
  return (
    <div className="h-screen text-gray-200 bg-blue-300 p-5 grid grid-cols-6 grid-rows-12 gap-0 ">
      <div className="col-span-1 row-span-1 row-start-1 col-start-1 pt-2 flex items-end justify-end relative">
        <Image
          fill={true}
          alt="hiku icon"
          className="rounded-xl "
          objectFit="contain"
          src="/hiku-favicon.png"
        />
      </div>
      <div className="col-span-6 row-span-1 row-start-2 col-start-1 flex flex-col justify-start items-start space-y-4">
        <text className={headerFont.className}>
          <div className="text-5xl text-teal-700">Hiku Dev</div>
        </text>
        <text className="text-black text-xl">
          As a product tester at a developer tool startup, I helped to build a
          more production ready product through finding bugs and creating
          solutions for them.
        </text>
      </div>
      <div className="col-span-6 row-span-4 row-start-6 rounded-xl relative overflow-hidden">
        <Image
          fill={true}
          alt="hiku wireframe"
          objectFit="contain"
          className="w-full h-full"
          src="/hikuWire.svg"
        />
      </div>
      <div className="col-span-2 row-span-1 row-start-10 col-start-5">
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-teal-800 bg-teal-500 px-3 font-medium text-neutral-900 transition-all [box-shadow:0px_4px_1px_rgb(82_82_82)] active:translate-y-[2px] active:shadow-none">
          Read More
        </button>
      </div>
    </div>
  );
}
