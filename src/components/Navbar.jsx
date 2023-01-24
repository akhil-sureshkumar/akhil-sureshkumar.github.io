import { Link } from 'react-scroll';

const Navbar = () => {

  return (
    <div className='flex justify-between items-center w-full h-20 bg-white px-4 fixed border-b-2'>
      <ul className='flex'>
        <li className='px-4 cursor-pointer font-medium text-black capitalize ml-2 hover:scale-105 duration-200 hover:animate-text hover:bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 hover:bg-clip-text hover:text-transparent'><Link to="home" smooth duration={500}>home</Link></li>
        <li className='px-4 cursor-pointer font-medium text-black capitalize ml-2 hover:scale-105 duration-200 hover:animate-text hover:bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 hover:bg-clip-text hover:text-transparent'><Link to="about" smooth duration={500}>about me</Link></li>
        <li className='px-4 cursor-pointer font-medium text-black capitalize ml-2 hover:scale-105 duration-200 hover:animate-text hover:bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 hover:bg-clip-text hover:text-transparent'><Link to="experience" smooth duration={500}>experience</Link></li>
        <li className='px-4 cursor-pointer font-medium text-black capitalize ml-2 hover:scale-105 duration-200 hover:animate-text hover:bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 hover:bg-clip-text hover:text-transparent'><Link to="links" smooth duration={500}>my links</Link></li>
      </ul>
    </div>
  )
}

export default Navbar