import Head from 'next/head';
import { motion } from 'framer-motion';

// Import components
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Services from '../components/Services';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Section = ({ id, children }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  );
};

export default function Home() {
  return (
    <div className="bg-background">
      <Head>
        <title>Rommel Llanos - Software Developer</title>
        <meta name="description" content="Rommel Llanos's personal portfolio website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Section id="home">
          <Hero />
        </Section>
        <Skills />
        <Section id="services">
          <Services />
        </Section>
        <Section id="about">
          <About />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </main>
    </div>
  );
}
