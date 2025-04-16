
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center" id="home">
      <div className="absolute inset-0 bg-gradient-to-r from-veljuu-100 to-veljuu-50 opacity-50"></div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-1/2 h-full bg-veljuu-500 opacity-5 rounded-l-full hidden lg:block"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-veljuu-950 leading-tight">
            Product Management <br /> 
            <span className="text-veljuu-600">Expertise for Your Business</span>
          </h1>
          <p className="text-xl md:text-2xl mt-6 text-gray-700 max-w-2xl">
            Hi, I'm Steffie De Kerpel, a freelance Product Manager with over 15 years of experience at companies of all sizes. I help those companies build products that users love.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-veljuu-600 text-white rounded-md font-medium hover:bg-veljuu-700 transition-colors inline-flex items-center justify-center"
            >
              Get in Touch
            </a>
            <a
              href="#services"
              className="px-8 py-3 border border-veljuu-600 text-veljuu-600 rounded-md font-medium hover:bg-veljuu-50 transition-colors inline-flex items-center justify-center"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-veljuu-600">
          <ArrowDown size={30} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
