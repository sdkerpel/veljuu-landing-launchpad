
import React from 'react';
import { Lightbulb, Target, TrendingUp, Users, FileSearch, Workflow } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Lightbulb className="h-10 w-10 text-veljuu-600" />,
      title: 'Product Strategy',
      description: 'Developing roadmaps, feature prioritization, and long-term vision for your product to maximize business impact and growth.'
    },
    {
      icon: <Target className="h-10 w-10 text-veljuu-600" />,
      title: 'Product Discovery',
      description: 'Conducting user research, market analysis, and opportunity assessment to identify the right problems to solve.'
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-veljuu-600" />,
      title: 'Product Analytics',
      description: 'Setting up metrics, analyzing user behavior, and driving data-informed decisions to optimize product performance.'
    },
    {
      icon: <Users className="h-10 w-10 text-veljuu-600" />,
      title: 'UX Optimization',
      description: 'Enhancing user experience through customer journey mapping, usability testing, and continuous improvement cycles.'
    },
    {
      icon: <FileSearch className="h-10 w-10 text-veljuu-600" />,
      title: 'Product Audit',
      description: 'Evaluating your current product, identifying improvement opportunities, and providing actionable recommendations.'
    },
    {
      icon: <Workflow className="h-10 w-10 text-veljuu-600" />,
      title: 'Agile Implementation',
      description: 'Establishing or improving agile processes, team collaboration, and product development workflows.'
    }
  ];

  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle">
            Comprehensive product management services to help your business grow and succeed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-veljuu-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
