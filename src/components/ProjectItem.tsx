import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import propertyImg from '/public/assets/projects/property.jpg'

type IProps = {
  title: string
  background: string | StaticImageData
  urlDemo: string
  urlCode: string
  technology: string
  description: string
}
const ProjectItem = ({
  title,
  background,
  urlDemo,
  urlCode,
  technology,
  description
}: IProps) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={background}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className=" text-white text-center">{technology}</p>
        <p className="pb-4 pt-2 text-white text-center">{description}</p>
        <div
          className={
            urlDemo && urlCode
              ? 'flex flex-row justify-center gap-4'
              : 'flex flex-row justify-center'
          }
        >
          <Link href={urlDemo} target={'_blank'}>
            <p
              className={
                urlDemo
                  ? 'text-center px-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer'
                  : 'hidden'
              }
            >
              Demo
            </p>
          </Link>
          <Link href={urlCode} target={'_blank'}>
            <p
              className={
                urlCode
                  ? 'text-center px-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer'
                  : 'hidden'
              }
            >
              Code
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
