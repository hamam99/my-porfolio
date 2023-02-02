import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProjectItem from './ProjectItem'
import propertyImg from '/public/assets/projects/property.jpg'
import netflixImg from '/public/assets/projects/netflix.jpg'
import cryptoImg from '/public/assets/projects/crypto.jpg'

function Projects() {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2>What I Have Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title={'Property Finder'}
            background={propertyImg}
            projectUrl="/property"
          />
          <ProjectItem
            title={'Crypto App'}
            background={cryptoImg}
            projectUrl="/crypto"
          />
          <ProjectItem
            title={'Netflix'}
            background={netflixImg}
            projectUrl="/netflix"
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
