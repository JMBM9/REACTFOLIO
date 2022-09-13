import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container bg-black-900 mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              My name is Jean 
            <br className="hidden lg:inline-block" /> And I am a full-stack web developer
            
          </h1>
          <p className="mb-8 leading-relaxed">
          I am a student at UCF learning about web development to sharpen my skills. I am from the Dominican Republic and live in the united states
          for quite sometime now. I got into coding due to a interest in technology and learning the ability to create my own applications.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Contact me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 hover:text-white rounded text-lg">
              Project log
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          
        </div>
      </div>
    </section>
  );
}
