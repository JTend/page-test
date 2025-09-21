import React from 'react';

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#E6F7FF]">Core Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#161B22] rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow duration-300">
          <div className="text-6xl mb-4">💻</div>
          <h3 className="text-2xl font-bold text-[#E6F7FF] mb-2">Full-Stack Development</h3>
          <p className="text-[#B0B0B0]">
            Building responsive frontends with React and robust backends with Node.js, PHP, and C#, delivering complete, end to end web solutions.
          </p>
        </div>
        <div className="bg-[#161B22] rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow duration-300">
          <div className="text-6xl mb-4">📈</div>
          <h3 className="text-2xl font-bold text-[#E6F7FF] mb-2">ERP Solutions</h3>
          <p className="text-[#B0B0B0]">
            Developing and customizing Enterprise Resource Planning systems to streamline business processes and enhance operational efficiency for diverse clients.
          </p>
        </div>
        <div className="bg-[#161B22] rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow duration-300">
          <div className="text-6xl mb-4">🔧</div>
          <h3 className="text-2xl font-bold text-[#E6F7FF] mb-2">IT Management & Support</h3>
          <p className="text-[#B0B0B0]">
            Overseeing IT infrastructure, managing databases, and providing comprehensive technical support for both software and hardware challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Expertise;