import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Technology from "./components/Technology";
import Capabilities from "./components/Capabilities";
import FeaturedWork from "./components/FeaturedWork";
import Process from "./components/Process";
import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="grain min-h-screen overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Technology />
        <Capabilities />
        <FeaturedWork />
        <Process />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
