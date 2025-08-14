'use client';
import { Typography, Box, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'IT Projects Analyst',
    company: 'Veconinter',
    period: 'Mar 2024 – present',
    description: [
      'Lead and manage maritime logistics technology initiatives across 15+ countries in Latin America.',
      'Collaborate with international IT teams to build tools that meet SLAs and enhance service delivery.',
      'Implement internal systems that reduce operational overhead and optimize workflows',
      'Designed and implemented a ClickUp workflow for a 30-member team, integrating dashboards and reports to track progress and optimize performance',
      'Prepared and managed GIT implementation in core legacy code base',
    ],
  },
  {
    title: 'Mobile Developer',
    company: 'ANAR',
    period: 'Jan 2024 – Apr 2024',
    description: [
      'Converted an academic prototype into a production-ready detection system for petroglyphs, curating and augmenting a 4 000-image dataset and boosting YOLOv8 to 87 % mAP under varied lighting and erosion conditions.',
      'Deployed the model as a GPU-backed FastAPI microservice on Google Cloud; delivered sub-200 ms bounding-box and class predictions to field devices.',
      'Built a React Native app that streams photos to the cloud endpoint and overlays real-time detections with metadata, letting archaeologists validate inscriptions on-site and cutting manual classification time ≈ 60 %.',
      'Owned the entire lifecycle, data engineering, model optimisation, cloud DevOps, mobile UX and stakeholder training, demonstrating end-to-end product delivery in a high-accuracy, low-latency scientific setting.',
    ],
  },
  {
    title: 'Technology Director & Co-Founder',
    company: 'ZAS Group LLC',
    period: 'Mar 2022 – Jan 2024',
    description: [
      'Built and launched an e-commerce platform for more than 200 Venezuelan fashion brands; oversaw product vision, team hiring, and technology strategy.',
      'Migrated to Google Cloud Platform (VMs, DNS, object storage) ensuring 0 downtime and improved load times by 30%.',
      'Boosted conversion by 10% by redesigning the frontend UI and optimizing backend performance based on analytics an UX research.',
      'Ran focus group testing and field studies to validate features and maintain a user-centered approach',
    ],
  },
  {
    title: 'Computer Technician & Co-Founder',
    company: 'Veztech',
    period: 'Apr 2020 – Dec 2021',
    description: [
      'Implemented tailored IT support and infrastructure solutions for more than 20 small and mid-sized businesses.',
      'Managed a 3 members remote technical team that provided system diagnostics, and maintenance across several industries.',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Box id="experience" sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Experience
        </Typography>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card sx={{ mb: 4 }}>
                <CardContent>
                  <Typography variant="h6">{exp.title}</Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {exp.company} | {exp.period}
                  </Typography>
                  <ul>
                    {exp.description.map((item, i) => (
                      <li key={i}>
                        <Typography variant="body2">{item}</Typography>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Box>
    </motion.div>
  );
}
