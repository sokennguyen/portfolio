import Hero from "./components/Hero";
import Dreamember from "./components/Dreamember";
import Hiku from "./components/Hiku";
import localFont from "next/font/local";
const barber = localFont({ src: "./Barber-Complete.woff2" });

export default function Home() {
  return (
    <main className="flex flex-col snap-y snap-mandatory overflow-scroll bg-orange-200 h-screen ">
      <div className="snap-center snap-always">
        <Hero headFont={barber} />
      </div>
      <div className="snap-center snap-always">
        <Dreamember />
      </div>
      <div className="snap-center snap-always">
        <Hiku />
      </div>
    </main>
  );
}
