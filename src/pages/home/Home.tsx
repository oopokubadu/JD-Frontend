import CallToAction from "./components/CallToAction";
import FeaturedProduct from "./components/FeaturedProduct";
import Hero from "./components/Hero";
import PopContent from "./components/PopContent";
import Testimonial from "./components/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedProduct />
      <PopContent />
      <CallToAction />
      <Testimonial />
    </div>
  );
};

export default Home;
