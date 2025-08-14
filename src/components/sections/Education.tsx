'use client';
import { Typography, Box, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const education = [
  {
    institution: 'Universidad Simón Bolívar (USB)',
    degree: 'BSc in Computer Engineering',
    period: 'Apr 2016 – Jan 2025',
    description: [
      'Ranked 28 out of 7,380 in national admission exam.',
      'Completed coursework in AI, Data Structures and Algorithms, Web Development, and Software Engineering.',
    ],
  },
];

const courses = [
    {
        institution: '4Geeks Academy',
        degree: 'Full Stack Web Devolpment Bootcamp',
        period: 'Feb 2020 – Aug 2020',
        description: [
            'Built and deployed a full-stack React SPA backed by Flask/Node REST APIs with JWT auth and PostgreSQL.',
            'Mastered component hooks, responsive Bootstrap/CSS, API routing, and Git-driven CI/CD, gaining the ability to design, code, test, and ship complete web features independently.'
        ]
    }
]

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

export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Box id="education" sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Education
        </Typography>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {education.map((edu, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card sx={{ mb: 2 }}>
                <CardContent>
                  <Typography variant="h6">{edu.institution}</Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {edu.degree} | {edu.period}
                  </Typography>
                  <ul>
                    {edu.description.map((item, i) => (
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
        <Typography variant="h4" component="h1" gutterBottom sx={{mt: 4}}>
            Courses
        </Typography>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {courses.map((course, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card sx={{ mb: 2 }}>
                <CardContent>
                    <Typography variant="h6">{course.institution}</Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                    {course.degree} | {course.period}
                    </Typography>
                    <ul>
                    {course.description.map((item, i) => (
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
