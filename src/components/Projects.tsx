import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProjectItem from './ProjectItem'
import ProjectData from '../data/Projects'

function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2>What I Have Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {ProjectData.map((project) => {
            return (
              <ProjectItem
                key={project.name}
                title={project.name}
                background={project.image}
                urlCode={project.urlCode}
                urlDemo={project.urlDemo}
                technology={project.technology}
                description={project.description}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects
