import About from '@/sections/About';
import Blog from '@/sections/Blog';
import Brands from '@/sections/Brands';
import Classes from '@/sections/Classes';
import Footer from '@/sections/Footer';
import Hero from '@/sections/Hero';
import Membership from '@/sections/Membership';
import Team from '@/sections/Team';
import Testimonial from '@/sections/Testimonial';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Classes />
      <Team />
      <Membership />
      <Testimonial />
      <Blog />
      <Brands />
      <Footer />
    </main>
  );
}
