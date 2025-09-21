import React from 'react';

const Intro: React.FC = () => {
  return (
    <section id="intro" className="mb-16">
      <div className="bg-[#161B22] rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1 text-center">
          <div className="text-8xl md:text-9xl font-black text-[#00AADD]">15+</div>
          <div className="text-2xl font-bold text-[#E6F7FF] tracking-wide">Years of Experience</div>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-3 text-[#E6F7FF]">Professional Profile</h2>
          <p className="text-lg text-[#B0B0B0] leading-relaxed text-justify">
            A dedicated Systems Engineer with over a decade of hands-on experience in full-stack web application development, 
            IT management, and technical support. Proficient in a wide range of technologies, 
            with a strong commitment to ethical, quality-driven work and continuous learning to contribute effectively to forward-thinking teams.
            I have also enhanced my skills by teaching at university institutes and through courses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;