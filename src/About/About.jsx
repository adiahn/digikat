import React from 'react'
import He from "./he.jpeg"

const About = () => {
  return (
    <div className='flex flex-col w-full'>
        <h1 className='text-5xl text-center'>ABOUT</h1>
        <div className='flex flex-row flex-wrap justify-between p-5'>
            <section className='w-8/12 h-96'>
                <p className='text-lg text-justify p-5'><span className='text-2xl font-bold'>"DIGIKAT" </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nesciunt magni 
                    molestias tenetur incidunt ea quasi laudantium tempora aperiam dolor eveniet, 
                    reiciendis dolore perspiciatis facilis repellendus aut totam suscipit ducimus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nesciunt magni 
                    molestias tenetur incidunt ea quasi laudantium tempora aperiam dolor eveniet, 
                    reiciendis dolore perspiciatis facilis repellendus aut totam suscipit ducimus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nesciunt magni 
                    molestias tenetur incidunt ea quasi laudantium tempora aperiam dolor eveniet, 
                    reiciendis dolore perspiciatis facilis repellendus aut totam suscipit ducimus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nesciunt magni 
                    molestias tenetur incidunt ea quasi laudantium tempora aperiam dolor eveniet, 
                    reiciendis dolore perspiciatis facilis repellendus aut totam suscipit ducimus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nesciunt magni 
                    molestias tenetur incidunt ea quasi laudantium tempora aperiam dolor eveniet, 
                    reiciendis dolore perspiciatis facilis repellendus aut totam suscipit ducimus!
                    </p>
            </section>
            <section className='w-4/ flex justify-center'>
                <img src={He} alt="" className='w-8/12 rounded-sm'/>
            </section>
        </div>
    </div>
  )
}

export default About