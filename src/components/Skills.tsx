import Image from 'next/image'
import React from 'react'
import SkillData from '../data/Skills'
import SkillItems from './SkillItems'

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SkillData.map((data, index) => {
            return (
              <SkillItems skill={data.skill} image={data.image} key={index} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Skills
