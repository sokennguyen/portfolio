import Hero from "./components/Hero";
import Project from "./components/Project";
import localFont from "next/font/local";
const barber = localFont({ src: "./Barber-Complete.woff2" });

export default function Home() {
  return (
    <main className="flex flex-col snap-y snap-mandatory overflow-scroll bg-orange-200 h-screen ">
      <div className="snap-center snap-always">
        <Hero headFont={barber} />
      </div>
      <div className="snap-center snap-always">
        <Project headFont={barber} />
      </div>
      <div className="snap-center snap-always">
        <Project content={"project 2"} />
      </div>
    </main>
  );
}
