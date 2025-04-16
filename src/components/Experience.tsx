
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'SNCB',
      role: 'Senior Product Manager',
      period: '2023 - Present',
      description: 'Leading the development of digital customer experiences for Belgium's national railway company, focusing on mobile apps and website improvements to enhance the travel experience for millions of passengers.'
    },
    {
      company: 'Bolt',
      role: 'Product Manager',
      period: '2022 - 2023',
      description: 'Led product initiatives for Bolt Food's restaurants and courier experiences across Europe, focusing on improving operational efficiency, growth, and satisfaction metrics.'
    },
    {
      company: 'TikTok',
      role: 'Product Manager',
      period: '2020 - 2022',
      description: 'Managed the Creator Marketplace product, connecting brands with content creators. Drove significant growth in user engagement and business metrics across European markets.'
    },
    {
      company: 'Wunderman Thompson',
      role: 'Product Owner',
      period: '2018 - 2020',
      description: 'Led agile teams to deliver digital solutions for major clients. Bridged the gap between business objectives and technical implementation, ensuring high-quality delivery of web and mobile applications.'
    }
  ];

  return (
    <section id="experience" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">My Experience</h2>
        <p className="section-subtitle">
          A proven track record of success at leading companies in diverse industries
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
