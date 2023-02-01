import Image from 'next/image'
import React from 'react'
import AboutImg from '/public/assets/about.jpg'

export default function About() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="py-4 uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">//I am not your normal developer</p>
          <p className="py-2 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
            error, quas quis et blanditiis molestias ducimus saepe eum expedita
            maxime ad, odio consequuntur sapiente ut quasi neque impedit
            accusamus. Doloribus?
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
            debitis temporibus corrupti quae veniam deserunt odio! Illo eius
            nesciunt consectetur? Dignissimos ex neque ducimus voluptates porro
            ipsa provident vitae voluptatum?
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:sclae-105 ease-in duration-300">
          <Image src={AboutImg} alt={''} className={'rounded-xl'} />
        </div>
      </div>
    </div>
  )
}
