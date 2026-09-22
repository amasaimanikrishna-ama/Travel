import React from 'react';
import Hero from '../../components/home/Hero';
import PopularDestinations from '../../components/home/PopularDestinations';
import FeaturedCars from '../../components/home/FeaturedCars';
import TravelPackages from '../../components/home/TravelPackages';
import Experiences from '../../components/home/Experiences';
import WhyChooseUs from '../../components/home/WhyChooseUs';
import Testimonials from '../../components/home/Testimonials';
import Newsletter from '../../components/home/Newsletter';

export default function Home() {
  return (
    <main>
      <Hero />
      <PopularDestinations />
      <FeaturedCars />
      <TravelPackages />
      <Experiences />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
