import About from "./components/About";
import Contact from "./components/Contact";
import Dishes from "./components/Dishes";
import Experties from "./components/Experties";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Mission from "./components/Mission";
import Navbar from "./components/Navbar";
import Review from "./components/Review";

function App() {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <HeroSection />
      <Navbar />
      <Dishes />
      <About />
      <Mission />
      <Experties />
      <Review />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
