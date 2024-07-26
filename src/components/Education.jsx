
import React from 'react';
import Navbar from './Navbar';
import { Send } from '@material-ui/icons';
import { Dialog } from '@material-ui/core';

const educations = [
  {
    id: 1,
    year: ' - Present',
    universityName: 'Chitkara University-Himachal Pradesh ',
    department: 'Bachelor of Technology in Computer Science & Engineering',
    description: '',
  },
  {
    id: 2,
    year: ' -2021 ',
    universityName: 'Krishna Kanta Handiqui Junior College, Assam',
    department: 'Higher Secondary School',
    description: '',
  },
  {
    id: 3,
    year: ' 2019 ',
    universityName: 'Bangaon HS School, Assam',
    department: 'Secondary School',
    description: '',
  },
];

const Education = () => {
  return (
    <>
      <Navbar />
      <header className="py-12 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-center text-red-500 uppercase">Education</h2>
          <div className="relative px-6 py-10 bg-white shadow-lg rounded-lg md:p-16">
            {/* Timeline line */}
            <div className="absolute inset-0 w-1 bg-gray-300 md:left-1/2"></div>
            {educations.map((education, index) => (
              <div key={education.id} className={`mb-8 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className={`relative z-10 p-6 bg-gray-800 rounded-lg shadow-lg ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                  <span className="absolute top-0 left-1/2 transform -translate-y-1/2 w-6 h-6 bg-gray-800 rounded-full md:left-auto md:right-1/2"></span>
                  <h3 className="mb-2 text-lg font-bold text-white md:text-2xl">{education.universityName}</h3>
                  <p className="mb-2 text-sm text-gray-400 md:text-lg">{education.department}</p>
                  <p className="text-sm text-gray-500 md:text-lg">{education.description}</p>
                  <p className="mt-2 text-sm text-red-500 md:text-lg">{education.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Education;
