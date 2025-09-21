import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center pt-8 border-t border-[#80DDFF]">
      <p className="text-xl font-bold text-[#E6F7FF] mb-4">Let's Connect</p>
      <div className="flex justify-center space-x-6">
        <a href="mailto:joseg.tenderor@gmail.com" className="text-[#80DDFF] hover:text-[#00AADD] transition-colors text-lg font-medium">Email</a>
        <a href="https://www.linkedin.com/in/jose-tendero/" className="text-[#80DDFF] hover:text-[#00AADD] transition-colors text-lg font-medium">LinkedIn</a>
        <a href="https://github.com/JTend" className="text-[#80DDFF] hover:text-[#00AADD] transition-colors text-lg font-medium">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;