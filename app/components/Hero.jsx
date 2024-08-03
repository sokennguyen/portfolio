import { Six_Caps } from "next/font/google";
import localFont from "next/font/local";
const barber = localFont({ src: "../Barber-Complete.woff2" });
const sixCaps = Six_Caps({ subsets: ["latin"], weight: ["400"] });

export default function Hero() {
  return (
    <div className="flex flex-col justify-end min-h-screen w-full">
      <div className="pb-16 pl-32 flex flex-col space-y-16 w-full">
        <div className="flex flex-row space-x-2">
          <h1 className="text-9xl font-extrabold text-gray-700 text-left">
            <text className={barber.className}>Kiên</text>
          </h1>
          <div className={sixCaps.className}>
            <div
              className="flex animate-spin-slow flex-col text-gray-600 rounded-full
          12 h-32 w-32 justify-center items-center space-y-2 text-5xl bg-red-400"
            >
              <span>SOFTWARE</span> <span>DEVELOPER</span>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-7xl font-extralight text-gray-700 text-left">
            <text className={barber.className}>Nguyễn</text>
          </h1>
          <div className="flex animate-bounce text-gray-600 justify-center pt-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
