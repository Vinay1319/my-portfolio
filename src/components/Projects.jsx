import React from 'react';
import FlyAway from '../assets/portfolio/flyAway.png';
import hotelio from '../assets/portfolio/hotelio.jpg';
import port from '../assets/portfolio/portfolio.png';
import ep from '../assets/portfolio/epproject.png';
import { BsPersonWorkspace } from "react-icons/bs";


const Projects = () => {
  const proj = [
    {
      id: 1,
      src: FlyAway,
      href: 'https://github.com/Vinay1319/sdp',
      description: 'A Flight Booking System developed in MERN Stack'
    },
    {
      id: 2,
      src: hotelio,
      href: 'https://github.com/Vinay1319/Hotelio',
      description: 'A hotel management system developed using the Spring Boot framework in a full-stack Java setup.'
    },
    {
      id: 3,
      src: port,
      href: 'https://github.com/Vinay1319/Hotelio',
      description: 'Built a portfolio for myself using ReactJS and Tailwind CSS.'
    },
    {
      id: 4,
      src: ep,
      href: 'https://github.com/Vinay1319/EP-Project',
      description: 'Engineered with enterprise programming frameworks, Aurora Aviations flight booking system streamlines the process of reserving and managing bookings efficiently.'
    },
  ];

  return (
    <div name='project' className='bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen pt-20'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <div className='inline-flex items-center border-b-4 border-gray-500'>
            <p className='text-4xl font-bold'>My Projects</p>
            <BsPersonWorkspace className='ml-2 text-4xl' />
          </div>
          <p className='py-6'>Check out some of my work here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {proj.map((poc) => (
            <div key={poc.id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={poc.src} alt='' className='rounded-md duration-200 hover:scale-105' />
              <div className='p-4'>
                <p>{poc.description}</p>
              </div>
              <div className='flex items-center justify-center'>
                <a className='px-6 py-3 m-4 duration-200 hover:scale-105 bg-blue-500 rounded-md' target='_blank' rel='noreferrer' href={poc.href}>Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
