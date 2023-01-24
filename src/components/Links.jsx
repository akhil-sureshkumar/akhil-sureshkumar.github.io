import React from 'react'

import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Links = () => {
  return (
    <div name="links" className="w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black">
        <div>
          <p className="text-4xl font-bold">
            My Links
          </p>
        </div>

        <div className="w-72 grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

          <a href="https://github.com/akhil-sureshkumar">
            <FaGithub size={'4rem'} />
          </a>
          <a href="https://www.linkedin.com/in/akhilesh-sureshkumar-308726229/">
            <FaLinkedin size={'4rem'} hre />
          </a>
          <a href="https://www.instagram.com/akhilsureshkumar43/?hl=en">
            <FaInstagram size={'4rem'} />
          </a>


        </div>

      </div>
    </div>
  )
}

export default Links