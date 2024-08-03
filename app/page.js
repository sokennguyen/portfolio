import Image from "next/image";

export default function Home() {
  return (
    <main className="flex bg-orange-200 min-h-screen h-full">
      <div className="flex flex-col justify-end min-h-screen">
        <div className="pb-32 pl-32">
          <div className="flex flex-row space-x-2">
            <h1 className="text-9xl font-extrabold text-gray-700 text-left">
              Kien
            </h1>
            <div
              className="flex flex-col text-gray-600 rounded-full
              12 h-36 w-36 justify-center items-center space-y-2 text-xl bg-red-400"
            >
              <span>SOFTWARE</span> <span>DEVELOPER</span>
            </div>
          </div>
          <h1 className="text-7xl font-light text-gray-700 text-left">
            Nguyen
          </h1>
        </div>
      </div>
    </main>
  );
}
