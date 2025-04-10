import React from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'

function Home() {
  return (
    <main className='homeBgImg '>
      <Navigation />
      <section className="homeSection flex justify-between  max-md:pt-[10rem] md:pt-[20rem] pb-[5rem] max-md:flex-col max-md:text-center max-md:gap-y-[4rem] max-w-[900px] xl:mx-auto">
        <div className="spaceHomeContentContainer flex flex-col gap-[2rem]">
          <h2 className='homeHeadingTwo text-2xl'>So, you want to travel to  <br /></h2>
          <h1 className='homeHeading xs:text-9xl'>Space</h1>
          <p className='md:max-w-[74%]'>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
        </p>
        </div>
        <div className="exploreContainer self-center">
          <Link to='/destination'>EXPLORE</Link>
        </div>
      </section>
    </main>
  )
}

export default Home