import Hero from "./components/Hero";
import Project from "./components/Project";

export default function Home() {
  return (
    <main className="flex flex-col snap-y snap-mandatory overflow-scroll bg-orange-200 h-screen ">
      <div className="snap-center snap-always">
        <Hero />
      </div>
      <div className="snap-center snap-always">
        <Project content={"project 1"} />
      </div>
      <div className="snap-center snap-always">
        <Project content={"project 2"} />
      </div>
    </main>
  );
}
