import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import Link from 'next/link'
import AboutMe from '@/data/AboutMe'

export default function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px]  w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let`s Build Something Amazing Together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I`m <span className="text-[#5651e5]">Hamam</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Mobile Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Currently, I`m focused on build mobile app and other magic stuff
            using React Native while learning Front End technologies.
          </p>
          <div className="flex item-center justify-between max-w-[250px] m-auto py-4">
            <a href={AboutMe.linkedin} target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a href={AboutMe.github} target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href={'/#contact'} scroll={false}>
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
