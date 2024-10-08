import React from 'react'
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/vinay-pati/",
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                GitHub <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/Vinay1319",
        },
        {
            id: 3,
            child: (
                <>
                Instagram <FaInstagram size={30} />
                </>
            ),
            href: "https://www.instagram.com/vinayyy.13/",
        },
        {
            id: 4,
            child: (
                <>
                Gmail <SiGmail size={30} />
                </>
            ),
            href: 'mailto: 21000322848cseh@gmail.com',
            style: 'rounded-br-md',
        },
    ];

  return (
    <div className=' lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>

        {links.map(({id, child, href, style}) => (
        <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'}>
        <a href={href} className='flex justify-between items-center w-full text-white' target='_blank' rel="noreferrer">
            {child}
            </a>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLinks;
