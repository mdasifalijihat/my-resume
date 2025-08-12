import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import HomeBanner from '../HomeBanner/HomeBanner';
import About from '../../About/About';
import Skills from '../../Skills/Skills';
import Projects from '../../Projects/Projects';
import ContactMe from '../../ContactMe/ContactMe';
import Testimonials from '../../Testimonials/Testimonials';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      <section id="home"><HomeBanner /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><ContactMe /></section>
      <Testimonials />
    </div>
  );
};

export default Home;
