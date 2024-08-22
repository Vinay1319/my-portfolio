import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import oracle from '../assets/oracle.png';
import aws from '../assets/cp.png'
import redhat from '../assets/redhat.png';
import { TbCertificate } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";
import klu from '../assets/klu.jpg';

const Education = () => {
  const progressData = [
    { title: 'Java', percentage: 90 },
    { title: 'C', percentage: 85 },
    { title: 'JavaScript', percentage: 75 },
    { title: 'Cyber Security', percentage: 75 },
    { title: 'Full Stack Development', percentage: 80 },
    { title: 'HTML', percentage: 90 },
    { title: 'CSS', percentage: 80 },
    { title: 'React JS', percentage: 80 },
    { title: 'Node JS', percentage: 80 },
    { title: 'Mongo DB', percentage: 70 },
    { title: 'SQL', percentage: 75 },
  ];

  const proj = [
    {
      id: 1,
      src: redhat,
      href: 'https://www.credly.com/badges/42f2e359-381d-4d3f-a5e3-ce0822131b1b/public_url',
    },
    {
      id: 2,
      src: oracle,
      href: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=F8A8ADD49EB9D75A7C245CBCC889C65F9182ACC0327AA9CC9D77ECFDE5EF14E9',
    },
    {
      id: 3,
      src: aws,
      href: 'https://www.credly.com/badges/2d031140-2f3a-4235-ad66-cfd4e2036410/public_url',
    },
  ];

  const points = [
    "I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CNS, etc.",
    "Apart from this, I have done courses on Cyber Security and Full Stack Development.",
    "Created Multiple Full Stack Projects by using various Stacks like Django, SpringBoot, Mern",
  ];

  const personalInfo = [
    { title: 'Name', value: 'Vinay Pati' },
    { title: 'Age', value: 20 },
    { title: 'Gender', value: 'Male' },
    { title: 'Email', value: 'iamvinayy100@gmail.com' },
    { title: 'From', value: 'Hyderabad' },
    { title: 'Language', value: 'English, Telugu, Hindi' },
    { title: 'Work', value: 'Student' },
    { title: 'Nationality', value: 'Indian' },
  ];

  const clgDetails = [
    { title: 'College Name', value: 'KL University' },
    { title: 'Branch', value: 'B.Tech,CSE' },
    { title: 'Stream', value: 'Cyber Security & Blockchain' },
    { title: 'CGPA', value: '8.87' },
    { title: 'Year', value: '2021-2025' },
  ];

  return (
    <div name='about' className='w-full bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full min-h-screen'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About Me</p>
        </div>
        <p className='text-xl mt-15'>
          As a cybersecurity enthusiast with a passion for full-stack web development. My goal is to create innovative and secure web applications that make a positive impact in the world. I am dedicated to staying up-to-date with the latest technologies and trends, and I am always eager to learn and grow in my field. I am committed to delivering high-quality work that exceeds expectations. My passion for cybersecurity and web development drives me to constantly strive for excellence, and I am excited to see where my journey will take me next.
        </p>
        
        <div className='mt-10'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
            {personalInfo.map((info, index) => (
              <div key={index} className="flex items-center mb-4">
                <FaArrowRightLong className='mr-2 text-gray-400' /> {/* Arrow icon */}
                <div className="flex items-center gap-2">
                  <strong className='text-base'>{info.title}:</strong>
                  <span className="text-base text-gray-400">{info.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        

        <div className='mt-20 flex flex-row'>
          <p className='text-4xl font-bold inline-flex border-b-4 border-gray-500'>Degree &nbsp; <FaGraduationCap /></p>
        </div>
        <div className='mt-20 flex'>
          <div className='flex-none w-1/5 md:w-1/6'>
            <img src={klu} alt='my profile' className='rounded-2xl mx-auto' style={{ background: 'transparent' }} />
          </div>
          <div className='flex-1 ml-8'>
            {clgDetails.map((detail, index) => (
              <div key={index} className="flex items-center mb-4">
                <FaArrowRightLong className='mr-2 text-gray-400' /> {/* Arrow icon */}
                <div className="flex items-center gap-2">
                  <strong className='text-sm'>{detail.title}:</strong>
                  <span className="text-sm text-gray-400">{detail.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ul className='text-xl mt-10 list-none'>
          {points.map((point, index) => (
            <li key={index} className='flex items-center mb-4'>
              <FaArrowRightLong className='mr-2' />{point}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap justify-between mt-20 mb-16"> {/* Added mb-16 for spacing */}
          {progressData.map((progress, index) => (
            <div key={index} className="flex-1 min-w-[45%] m-2">
              <div className="mb-2 flex justify-between items-center">
                <h3 className="text-sm font-semibold text-white">{progress.title}</h3>
                <span className="text-sm text-white">{progress.percentage}%</span>
              </div>
              <div
                className="flex w-full h-2 rounded-full overflow-hidden bg-neutral-700"
                role="progressbar"
                aria-valuenow={progress.percentage}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="flex flex-col justify-center rounded-full overflow-hidden text-xs text-white text-center whitespace-nowrap transition duration-500 bg-blue-500"
                  style={{ width: `${progress.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
          <div className='mt-20 flex flex-row'>
            <p className='text-4xl font-bold inline-flex border-b-4 border-gray-500'>My Certifications &nbsp; <TbCertificate /></p>
          </div>
          <div className='mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {proj.map((poc) => (
              <div key={poc.id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={poc.src} alt='' className='rounded-md duration-200 hover:scale-105' />
                <div className='flex justify-center w-full'>
                  <a className='px-6 py-3 m-4 duration-200 hover:scale-105 bg-blue-500 text-white rounded-md' target='_blank' rel='noreferrer' href={poc.href}>View</a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Education;
