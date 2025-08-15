'use client';
import { Box, Container } from '@mui/material';
import TopAppBar from '../components/layout/TopAppBar';
import Hero from '../components/sections/Hero';
import AboutMe from '../components/sections/AboutMe';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import GetInTouch from '../components/sections/GetInTouch';

export default function Home() {
  return (
    <Box>
      <TopAppBar />
      <Container>
        <Hero />
        <AboutMe />
        <FeaturedProjects />
        <GetInTouch />
      </Container>
    </Box>
  );
}
