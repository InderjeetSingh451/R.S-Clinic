import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Laboratory from "../components/Laboratory";
import WhyChooseUs from "../components/WhyChooseUs";
import Statistics from "../components/Statistics";
import Doctors from "../components/Doctors";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div id="home" className="bg-white overflow-hidden">
      <Navbar />

      <Hero />

      <About />

      <Services />

      <Laboratory />

      <WhyChooseUs />

      <Statistics />

      <Doctors />

      <Testimonials />

      <Gallery />

      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
