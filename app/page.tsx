import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Testimonial from '@/components/Testimonial';
import SeeTheBigPicture from '@/components/SeeTheBigPicture';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import LargeImage from '@/components/LargeImage';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SeeTheBigPicture />
      <WhyChooseUs />
      <Testimonial />
      <Process />
      <LargeImage />
      <FinalCTA />
      <Footer />
    </>
  );
}
