import React from 'react';
import Mypic from '../assets/myPic.jpg';
import { MdOutlineArrowRight } from 'react-icons/md';
import Resume from '../assets/MyResume.pdf';
import SocialLinks from './SocialLinks';

const Home = () => {
  return (
    <>
      <div>
        <SocialLinks />
      </div>
      <div
        name="home"
        className='flex h-full md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 mx-auto my-auto'
      >
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
          <div className='flex flex-col justify-center h-full pl-20 mb-12 md:mb-0'>
            <div className='text-4xl sm:text-7xl font-bold text-white' style={{ height: '80px' }}></div>
            <h1 className='text-4xl font-bold text-white'>Hi, I'm Vinay Pati</h1>
            <h2 className='mt-4 text-3xl sm:text-5xl font-bold text-white'>I'm a Full Stack Developer</h2>
            <p className='text-gray-500 py-4 max-w-md'>
              A passionate individual who always thrives to work on end-to-end products which develop sustainable and scalable social and technical systems to create impact.
            </p>
            <div>
              <a
                href={Resume}
                className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-400 cursor-pointer'
                target='_blank'
                rel='noopener noreferrer'
              >
                Resume
                <span className='group-hover:rotate-180 duration-300'>
                  <MdOutlineArrowRight size={25} className='ml-1' />
                </span>
              </a>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <img src={Mypic} alt='my profile' className='rounded-2xl mx-auto w-2/3 md:w-full' style={{ background: 'transparent' }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
