import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import About from '../../About/About';
import Skills from '../../Skills/Skills';
import Projects from '../../Projects/Projects';
import ContactMe from '../../ContactMe/ContactMe';
import Testimonials from '../../Testimonials/Testimonials';


const Home = () => {
  return (
    <div>
      <section id="home"><HomeBanner/></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><ContactMe /></section>

      <Testimonials />
      
    </div>
  );
};

export default Home;
