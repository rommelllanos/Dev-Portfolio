'use client';
import * as React from 'react';
import { AppBar, Toolbar, Typography, Container, Box, Button } from '@mui/material';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Education from '../components/sections/Education';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Rommel Llanos
          </Typography>
          <Button color="inherit" href="#about">About</Button>
          <Button color="inherit" href="#experience">Experience</Button>
          <Button color="inherit" href="#education">Education</Button>
          <Button color="inherit" href="#skills">Skills</Button>
          <Button color="inherit" href="#projects">Projects</Button>
          <Button color="inherit" href="#contact">Contact</Button>
        </Toolbar>
      </AppBar>
      <Hero />
      <Container>
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </Container>
    </>
  );
}
