import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import java from '../assets/java.png';
import js from '../assets/Javascript.png';
import c from '../assets/CLogo.png';
import aws from '../assets/aws.png';
import mongo from '../assets/Mongo.png';
import node from '../assets/node js.png';
import rct from '../assets/React.png';
import sql from '../assets/sql.jpg';
import spring from '../assets/spring.png';
import { GoGraph } from "react-icons/go";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: java,
      title: 'JAVA',
      style: 'shadow-orange-500',
    },
    {
      id: 4,
      src: js,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 5,
      src: c,
      title: 'C',
      style: 'shadow-blue-500',
    },
    {
      id: 6,
      src: aws,
      title: 'AWS',
      style: 'shadow-yellow-500',
    },
    {
      id: 7,
      src: mongo,
      title: 'MongoDB',
      style: 'shadow-green-500',
    },
    {
      id: 8,
      src: node,
      title: 'Node Js',
      style: 'shadow-green-500',
    },
    {
      id: 9,
      src: rct,
      title: 'React',
      style: 'shadow-blue-600',
    },
    {
      id: 10,
      src: sql,
      title: 'My SQL',
      style: 'shadow-blue-500',
    },
    {
      id: 11,
      src: spring,
      title: 'Spring Boot',
      style: 'shadow-green-500',
    },
  ];

  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full min-h-screen pt-20'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div className='pb-8'>
          <div className='inline-flex items-center border-b-4 border-gray-500'>
            <p className='text-4xl font-bold'>Experience</p>
            <GoGraph className='ml-4 text-4xl' />
          </div>
          <p className='py-6'>These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt='' className='w-20 mx-auto' />
              <p className='mt-4'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
