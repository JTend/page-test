import React from 'react';
import SkillsChart from './charts/skills-charts';

const TechnicalProficiency: React.FC = () => {
  return (
    <section id="skills" className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#E6F7FF]">Technical Proficiency</h2>
      <div className="bg-[#161B22] rounded-2xl shadow-xl p-6 md:p-8">
        <p className="text-center text-[#B0B0B0] mb-6">
          This chart provides a comparative overview of my technical skills, categorized by proficiency level. 
          It highlights a strong foundation in modern web technologies alongside extensive experience with enterprise-level languages and databases.
        </p>
        <SkillsChart />
      </div>
    </section>
  );
};

export default TechnicalProficiency;