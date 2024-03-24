// data.ts

export const projects = [
  {
    id: 1,
    title: 'Bank Management System',
    description: 'A comprehensive system for managing banking operations. Built using Flask & Flask RestFull.', // Added description
    technologies: {
      backend: ['Python', "Flask", "RestAPI"],
      frontend: ['Html', "CSS", "BootStrap"]
    }
  },
  {
    id: 2,
    title: 'Project Management Website',
    description: 'An advanced project management platform integrating Django & Angular.', // Added description
    technologies: {
      backend: ['Python', "Django", "Postgres"],
      frontend: ['Angular', "PrimeNg", "PrimeFlex"]
    }
  },
  {
    id: 3,
    title: 'User Portfolio',
    description: 'A personal portfolio website developed using Angular.', // Added description
    technologies: {
      backend: ['Python', "Django", "Postgres"],
      frontend: ['Angular', "PrimeNg", "PrimeFlex"]
    }
  },
  {
    id: 4,
    title: 'Pinterest Clone in Django',
    description: 'A clone of the Pinterest platform developed using Django framework.',
    technologies: {
      backend: ['Python', 'Django', 'PostgreSQL'],
      frontend: ['HTML', 'CSS', 'JavaScript', 'Bootstrap']
    }
  },
  {
    id: 5,
    title: 'MakeMyTrip DRF',
    description: 'Develop a travel booking website backend using Django Rest Framework (DRF).',
    technologies: {
      backend: ['Python', 'Django', 'Django Rest Framework', 'PostgreSQL']
    }
  },
  {
    id: 6,
    title: 'LinkedIn Scraper',
    description: 'A web scraper for extracting data from LinkedIn profiles.',
    technologies: {
      backend: ['Python', 'Scrapy', 'Selenium'],
      database: ['MongoDB']
    }
  },
  {
    id: 7,
    title: 'IPDS Scraper',
    description: 'A web scraper for collecting data from government websites related to Integrated Power Development Scheme (IPDS).',
    technologies: {
      backend: ['Python', 'Scrapy'],
      database: ['MySQL']
    }
  },
  {
    id: 8,
    title: 'Face Recognition System',
    description: 'Develop a system capable of recognizing faces from images or video streams.',
    technologies: {
      backend: ['Python', 'OpenCV'],
      frontend: ['HTML', 'CSS', 'JavaScript']
    }
  },
  {
    id: 9,
    title: 'Proof of Concept on ElasticSearch',
    description: 'Create a proof of concept demonstrating the integration and configuration of ElasticSearch with MongoDB and MySQL.',
    technologies: {
      backend: ['ElasticSearch', 'MongoDB', 'MySQL']
    }
  }
];

export const skills = ['Skill 1', 'Skill 2', 'Skill 3'];

export const contactInfo = {
  email: 'example@email.com',
  phone: '123-456-7890',
};
