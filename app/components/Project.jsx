import Image from "next/image";
import localFont from "next/font/local";
const basteleur = localFont({ src: "../Basteleur-Bold.woff2" });

export default function Project({ headFont }) {
  return (
    <div className="h-screen text-gray-200 bg-emerald-500 p-2 grid grid-cols-4 grid-rows-8 gap-1">
      <div className="col-span-2 col-start-2 flex  text-3xl text-pink-300 justify-center items-start">
        <text className={basteleur.className}>Dreamember</text>
      </div>
      <div className="col-span-3 row-span-2 row-start-2 relative">
        <Image
          fill={true}
          alt="dreamember"
          className="rounded-xl "
          objectFit="cover"
          src="/dreamemberCropped.png"
        />
      </div>
      <div className="col-span-1 row-start-2 col-start-4 relative">
        <Image
          fill={true}
          alt="dreamember"
          className="rounded-xl"
          objectFit="cover"
          unoptimized={true}
          src="/dreamemberAccordian.gif"
        />
      </div>
      <div className="col-span-1 row-start-3 col-start-4 relative">
        <Image
          fill={true}
          alt="dreamember"
          className="rounded-xl"
          objectFit="cover"
          src="/dreamemberReview.png"
        />
      </div>

      {/* Second Row */}

      <div className="col-span-4 row-span-2 row-start-4 col-start-1 relative">
        <Image
          fill={true}
          alt="dreamember"
          className="rounded-xl "
          objectFit="cover"
          src="/dreamemberAdmin.png"
        />
      </div>
      <div className="col-span-1 row-start-6 col-start-1  relative">
        <Image
          fill={true}
          alt="dreamember"
          className="rounded-xl"
          objectFit="cover"
          unoptimized={true}
          src="/dreamemberSlider.gif"
        />
      </div>
      <div className="col-span-1 row-start-6 col-start-2 relative">
        <Image
          fill={true}
          alt="dreamember"
          className="rounded-xl"
          objectFit="cover"
          src="/dreamemberTag.png"
        />
      </div>
      <div className="col-span-2 row-start-6 col-start-3 relative">
        <Image
          fill={true}
          alt="dreamember"
          className="rounded-xl"
          objectFit="cover"
          unoptimized={true}
          src="/dreamemberArchive.gif"
        />
      </div>
    </div>
  );
}
