import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Hero from "./components/home/Hero";
import Navbar from "./components/navigation/navbar/Navbar";
import Footer from "./components/navigation/footer/Footer";
import Menu from "./components/menu/Menu";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
