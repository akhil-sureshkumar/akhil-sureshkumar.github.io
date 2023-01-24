import React from 'react'
import UnswImg from '../assets/akhil_mask_7.jpg'

const Home = () => {
  return (
    <div name='home' className='flex h-screen w-full'>
      <div className='max-w-screen-lg mx-auto flex flex-row items-center justify-center h-full px-4 space-x-40'>
        <div className='flex flex-col justify-center h-full'>

          <h2 className='text-3xl sm:text-5xl font-bold justify-text'>Akhilesh Sureshkumar</h2>

        </div>

        <div>
          <img src={UnswImg} alt="amazing" className='rounded-full w-full border-4 border-gray-400 object-scale-down h-72 ' />
        </div>
      </div>
    </div>
  )
}

export default Home