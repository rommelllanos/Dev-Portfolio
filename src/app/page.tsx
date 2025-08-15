'use client';
import { Box } from '@mui/material';
import TopAppBar from '../components/layout/TopAppBar';
import Hero from '../components/sections/Hero';
import AboutMe from '../components/sections/AboutMe';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import GetInTouch from '../components/sections/GetInTouch';

export default function Home() {
  return (
    <Box>
      <TopAppBar />
      <Box sx={{ px: { xs: 2, md: 10 }, py: { xs: 5, md: 5 } }}>
        <Hero />
        <AboutMe />
        <FeaturedProjects />
        <GetInTouch />
      </Box>
    </Box>
  );
}
