import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // Personal Information
  personalInfo = {
    name: 'Ing. Norbert Vozár',
    location: 'Lipovnik, district Roznava, Slovakia',
    phone: '+421 910 122 858',
    email: 'norbert.vozaar@gmail.com'
  };

  // Education
  education = [
    {
      institution: 'Technical University of Kosice',
      period: '2018 -- 2023',
      degree: 'Faculty of Electrical Engineering and Informatics, Computer Science, Computer Modelling',
      location: 'Kosice, Slovakia'
    },
    {
      institution: 'Gymnazium Pavla Jozefa Safarika - Pavol Jozef Safarik High School',
      period: '2014 -- 2018',
      degree: 'Secondary education with graduation certificate',
      location: 'Roznava, Slovakia'
    }
  ];

  // Work Experience
  experience = [
    {
      company: 'Ness Digital Engineering Slovakia - Vix Technology',
      period: 'October 2023 -- Present',
      location: 'Kosice, Slovakia',
      technologies: ['C#', 'Angular', 'PostgreSQL', 'Powershell', 'Bitbucket', 'AWS', 'Git', '.NET Core'],
      responsibilities: [
        'Migration of application from .NET Framework 4.7.2 to .NET Core',
        'Development of application in .NET Framework 4.7.2',
        'Frontend implementation in Angular 17',
        'Managing DevOps processes using AWS for product delivery',
        'Configuration, deployment, and maintenance of remote Windows/Linux servers'
      ]
    },
    {
      company: 'Ness Digital Engineering Slovakia - Dazn',
      period: 'April 2023 -- October 2023',
      location: 'Kosice, Slovakia',
      technologies: ['Java', 'AWS', 'Git', 'Github'],
      responsibilities: [
        'Migration of application from Java 8 to Java 11',
        'Deployment of changes using AWS'
      ]
    },
    {
      company: 'EcoPara s.r.o',
      period: 'May 2017 -- June 2022',
      location: 'Lipovnik, Slovakia',
      technologies: [],
      responsibilities: [
        'Customer communication and negotiation',
        'Processing orders and complaints',
        'Responsibility for final product quality'
      ]
    }
  ];

  // Technical Skills
  technicalSkills = {
    programmingLanguages: ['Java', 'C', 'C#', 'CSS', 'PostgreSQL', 'JavaScript', 'TypeScript', 'Angular'],
    technologies: ['Linux', 'GitHub', 'AWS', 'Docker', 'Git', 'Microsoft Office 365', 'Matlab'],
    drivingLicense: ['A', 'B']
  };

  // Language Skills
  languages = [
    { language: 'Slovak', level: 'Native' },
    { language: 'English', level: 'B2' },
    { language: 'Hungarian', level: 'C1' },
    { language: 'German', level: 'A1' }
  ];

  // Personal Characteristics
  personalCharacteristics = `From a temperament point of view, I would describe myself as a mix of sanguine and phlegmatic, which allows me to react flexibly to various situations and communicate effectively with different types of people. I place great emphasis on building and maintaining good interpersonal relationships because I believe that good team dynamics and mutual trust are key to success in a professional environment.

Even during my studies, I realized the importance of work ethic and therefore sought out various roles and projects that allowed me to fully utilize my potential while continuously learning new skills. I believe that education is a lifelong process that does not end with school or formal courses. I strive to remain curious, ask questions, and seek answers, as I believe every problem has a solution. My experience from previous job positions and projects has helped me develop the ability to solve problems effectively and adapt to changing demands in a dynamic work environment.`;
} 