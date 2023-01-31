import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src="/../public/assets/navLogo.png"
          alt="/"
          width={125}
          height={50}
        />
        <div>
          <ul className="hidden md:flex">
            <Link href="/" className="ml-10 text-sm uppercase hover:border-b">
              Home
            </Link>
            <Link href="/" className="ml-10 text-sm uppercase hover:border-b">
              About
            </Link>
            <Link href="/" className="ml-10 text-sm uppercase hover:border-b">
              Skills
            </Link>
            <Link href="/" className="ml-10 text-sm uppercase hover:border-b">
              Projects
            </Link>
            <Link href="/" className="ml-10 text-sm uppercase hover:border-b">
              Contact
            </Link>
          </ul>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
