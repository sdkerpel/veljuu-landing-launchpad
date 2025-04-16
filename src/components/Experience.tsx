
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'In The Pocket - Digital Product Agency',
      role: 'Senior Product Manager',
      period: '2022 - Present',
      description: 'Leading digital product development, focusing on creating user-centric solutions and driving strategic product initiatives.'
    },
    {
      company: 'Summlink',
      role: 'Product Manager',
      period: '2020 - 2022',
      description: 'Managed cross-functional teams to deliver innovative digital products, improving user experiences and business metrics.'
    },
    {
      company: 'Technology Consulting',
      role: 'Product Owner',
      period: '2018 - 2020',
      description: 'Bridged business objectives and technical implementation, ensuring high-quality delivery of web and mobile applications.'
    }
  ];

  return (
    <section id="experience" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">My Experience</h2>
        <p className="section-subtitle">
          Proven track record of delivering impactful digital products
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-veljuu-200"></div>

          {/* Experience items */}
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full bg-veljuu-600 border-4 border-veljuu-100"></div>
              
              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right ml-8 md:ml-0' : 'md:pl-12 ml-8 md:ml-0'}`}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-veljuu-800">{exp.company}</h3>
                  <div className="text-veljuu-600 font-medium mb-2">{exp.role}</div>
                  <div className="text-sm text-gray-500 mb-4">{exp.period}</div>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

