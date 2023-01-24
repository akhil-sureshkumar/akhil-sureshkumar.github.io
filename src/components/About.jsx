import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline'>About Me</p>
        </div>
        <p className='text-xl text-justify'>
          Hello! I'm Akhil, a 3rd year Software Student at UNSW. Outside of coding, I like watching and playing sports, going to the gym, and occasionally gaming.
        </p>



        <br />
        <p className='text-xl text-justify'>
          Up to this point, most of my work has been largely back-end with a bit of front-end, however I would love to learn more front-end.
        </p>

        <br />
        <p className='text-xl text-justify'>
          This website isn't anything super extravagant yet, but hopefully you like the simplicity and attention to detail!
        </p>
      </div>
    </div>
  )
}

export default About