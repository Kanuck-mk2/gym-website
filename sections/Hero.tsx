import HeroSlider from '../components/HeroSlider';

const Hero = () => {
  return (
    <section
      className="h-[80vh] lg:h-[912px] bg-hero bg-cover bg-center bg-no-repeat"
      id="home"
    >
      <div className="container mx-auto ">
        <HeroSlider />
      </div>
    </section>
  );
};

export default Hero;
