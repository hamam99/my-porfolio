import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsPersonLinesFill } from 'react-icons/bs'

export default function Main() {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px]  w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let`s Build Something Together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I`m <span className="text-[#5651e5]">Hamam</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Mobile Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            aliquid, assumenda rem sint dolorum porro error consequatur.
            Voluptates quaerat doloribus excepturi est ducimus sit similique
            fugiat, eius repellendus quibusdam odio.
          </p>
          <div className="flex item-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
              <BsPersonLinesFill />
            </div>{' '}
          </div>
        </div>
      </div>
    </div>
  )
}
