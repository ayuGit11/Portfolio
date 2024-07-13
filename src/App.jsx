import Contact from "./components/Contact";
import Name from "./components/Name";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased slec bg-black-300 selection:text-cyan-900 h-full">
      <div className="fixed top-0 -z-10 h-full w-full"></div>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="container mx-auto px-8 h-full">
        <Navbar />
        <Name />
        <Technologies />
        <Project />
        <Contact />
      </div>
    </div>
  );
};

export default App;
