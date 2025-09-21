import React from 'react';

const CareerTimeline: React.FC = () => {
  return (
    <section id="experience" className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#E6F7FF]">Career Timeline</h2>
      <div className="relative pl-8 border-l-4 border-dashed border-[#00AADD]">
        <div className="timeline-item mb-12 pl-8">
          <div className="absolute -left-10 text-center">
            <p className="text-sm font-bold text-white bg-[#0077B3] rounded-full px-3 py-1">Current</p>
          </div>
          <h3 className="text-2xl font-bold text-[#E6F7FF]">Freelance Full-Stack Developer</h3>
          <p className="text-md font-medium text-[#80DDFF] mb-2">Current</p>
          <div className="bg-[#161B22] rounded-lg p-6 shadow-lg">
            <p className="text-[#B0B0B0]">Developed custom ERP web applications, spearheaded frontend development with React, and contributed to backend services using PHP, Node.js, and C#. Provided comprehensive technical support and training.</p>
          </div>
        </div>
        <div className="timeline-item mb-12 pl-8">
          <h3 className="text-2xl font-bold text-[#E6F7FF]">IT Manager</h3>
          <p className="text-md font-medium text-[#80DDFF] mb-2">2011 - 2013</p>
          <div className="bg-[#161B22] rounded-lg p-6 shadow-lg">
            <p className="text-[#B0B0B0]">Managed all company-wide IT platforms and ERP software. Led development of client/server applications and maintained SQL Server databases.</p>
          </div>
        </div>
        <div className="timeline-item pl-8">
          <h3 className="text-2xl font-bold text-[#E6F7FF]">Tech Support</h3>
          <p className="text-md font-medium text-[#80DDFF] mb-2">2010</p>
          <div className="bg-[#161B22] rounded-lg p-6 shadow-lg">
            <p className="text-[#B0B0B0]">Integrated ERP software for small businesses, implemented LAN networks, and provided hands-on hardware and database support.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;