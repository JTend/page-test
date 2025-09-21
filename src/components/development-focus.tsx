import React from 'react';
import DevFocusChart from './charts/dev-focus-chart';

const DevelopmentFocus: React.FC = () => {
  return (
    <section id="development-focus" className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#E6F7FF]">Development Focus</h2>
      <div className="bg-[#161B22] rounded-2xl shadow-xl p-6 md:p-8">
        <p className="text-center text-[#B0B0B0] mb-6">
          This visualization illustrates the balance of my development expertise. It shows a strong emphasis on frontend technologies, 
          complemented by robust backend and database skills, reflecting a comprehensive full-stack capability.
        </p>
        <DevFocusChart />
      </div>
    </section>
    
  );
};

export default DevelopmentFocus;