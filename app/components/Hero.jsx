import localFont from "next/font/local";
import Image from "next/image";

const heroFont = localFont({ src: "../../public/fonts/ComicNeue-Light.ttf" });
const subHeroFont = localFont({ src: "../../public/fonts/Quicksand-Regular.ttf" });

export default function Hero({ }) {
  return (
    <div className="flex flex-col min-h-screen w-full  justify-start space-y-5 lg:space-y-24 lg:pt-10" >
      <h1 className={`${heroFont.className} lg:text-9xl font-light text-7xl text-gray-700 text-center flex flex-col space-y-5`}>
        <div>kien nguyen is a full stack</div>
        <div>software developer based</div>
        <div>in helsinki, finland</div>
      </h1>
      <div>
        <p className={`${subHeroFont.className} lg:text-5xl font-medium text-7xl text-gray-700 text-center flex flex-col lg:space-y-0`}>
          <div className="flex justify-center items-center space-x-0">
            <div>
              he loves mandarins
            </div>
            <Image
              width={120}
              height={200}
              alt="A mandarin"
              className="-rotate-12 "
              objectFit="cover"
              unoptimized={true}
              src="/real-mandarin.png"
            />
            <div>
              ,
              acoustic guitar sounds
            </div>
            <Image
              width={120}
              height={200}
              alt="A guitar"
              className="rotate-6 "
              objectFit="cover"
              unoptimized={true}
              src="/real-guitar.png"
            />
            ,
          </div>
          <div className="flex justify-center items-center space-x-0">
            tinkering with old thinkpads
            <Image
              width={100}
              height={100}
              alt="A guitar"
              className=""
              objectFit="cover"
              unoptimized={true}
              src="/thinkpad.png"
            />, and blazingly fast software!
          </div>
          <div className="lg:pt-14">
            view his works below, or say hi via email or linkedin.
          </div>
        </p>
        <div>
          <div className="flex animate-bounce text-gray-600 justify-center pt-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div >
  );
}
