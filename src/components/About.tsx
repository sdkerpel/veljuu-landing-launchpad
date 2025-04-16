
import React from 'react';
import { Award, Users, Briefcase, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Award className="h-8 w-8 text-veljuu-600" />,
      value: '8+',
      label: 'Years Experience',
    },
    {
      icon: <Users className="h-8 w-8 text-veljuu-600" />,
      value: '100+',
      label: 'Satisfied Clients',
    },
    {
      icon: <Briefcase className="h-8 w-8 text-veljuu-600" />,
      value: '50+',
      label: 'Projects Delivered',
    },
    {
      icon: <Globe className="h-8 w-8 text-veljuu-600" />,
      value: '3',
      label: 'Countries Worked In',
    }
  ];

  return (
    <section id="about" className="section-container">
      <div className="text-center mb-12">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Product management professional with expertise in product strategy, user experience, and agile methodologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-2xl font-bold text-veljuu-800 mb-4">Who I Am</h3>
          <p className="text-gray-700 mb-4">
            I'm a seasoned Product Manager who has navigated diverse environments — from fast-growing scale-ups like TikTok and Bolt to established corporations like SNCB. This breadth of experience has given me a unique perspective on product development across different company stages and industries.
          </p>
          <p className="text-gray-700 mb-4">
            With a background in Digital Marketing and over 8 years of experience in product development, I bring a holistic approach to product management that balances business objectives with user needs.
          </p>
          <p className="text-gray-700">
            My expertise extends across the entire product lifecycle — from discovery and strategy to execution and optimization. I'm passionate about building products that not only meet business goals but also deliver exceptional user experiences.
          </p>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -top-4 -left-4 w-full h-full bg-veljuu-200 rounded-lg"></div>
            <div className="relative z-10 bg-white p-6 shadow-lg rounded-lg">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4">
                    <div className="flex justify-center mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold text-veljuu-800">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
