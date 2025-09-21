import React from 'react';

const DevelopmentDetails: React.FC = () => {
  return (
    <section id="development-details" className="mb-16">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#E6F7FF]">Development Details</h2>

      <div className="md:col-span-1 text-center">
        <div className="text-7xl md:text-7xl font-black text-[#00AADD]">SQL</div>
      </div>
      <div className="md:col-span-2">
        <h2 className="text-2xl font-bold mb-3 text-[#E6F7FF]">MySQL, MSSQL, PGSQL</h2>
        <p className="text-lg text-[#B0B0B0] leading-relaxed text-justify">
          I can say that I have a complete command when it comes to SQL databases, 
          successfully designing optimal data structures from scratch (DDL) that meet business logic requirements, 
          using a good analysis to choose the correct data types and indexes for each case.
        </p>
        <p className="text-lg text-[#B0B0B0] leading-relaxed text-justify">
          I understand and make good use of the features offered by the logic of foreign keys to protect sensitive data through constraints, 
          automatic cascading actions, or more complex processes with triggers that save on development time transactions.
        </p>
        <p className="text-lg text-[#B0B0B0] leading-relaxed text-justify">
          Based on an optimal design, I can also design the statements that developers will use, 
          seeking to avoid them having to alternate between one language and another, 
          thus reducing their delivery time.
        </p>
        <p className="text-lg text-[#B0B0B0] leading-relaxed text-justify">
          By having a high command of the language, 
          I can quickly create any type of multi-table statements (Join, Subquery, JsonTables, etc.) as necessary (DQL or DML).
        </p>
      </div>

      <div className="md:col-span-1 text-center">
        <div className="text-7xl md:text-7xl font-black text-[#00AADD]">Backend</div>
      </div>
      <div className="md:col-span-2">
        <h2 className="text-2xl font-bold mb-3 text-[#E6F7FF]">Node, PHP, Java, C#</h2>
        <p className="text-lg text-[#B0B0B0] leading-relaxed text-justify">
          In my early years of programming, it was very common to build monolithic applications, that is, 
          to connect to the database and interact directly with the user. Although it's now deprecated, 
          this stage helped me to perform all kinds of data processing, which today I take advantage of to optimize my backend interfaces, 
          such as data formatting or partial lists to lighten data transfer.
        </p>
        <p className="text-lg text-[#B0B0B0] leading-relaxed text-justify">
          I have created and successfully implemented my own ERP application with a micro services architecture for two different clients.
          It has found its niche in customization, allowing me to perform processes that otherwise could not be controlled with traditional CRMs on the market.
        </p>
        <p className="text-lg text-[#B0B0B0] leading-relaxed text-justify">
          Although today's development is oriented towards REST client-server applications,
          I have seen also very common having to synchronize data between servers (Server-Server).
          One of them is generally the server for the companies' CRM.
          I generally achieve this by creating a recursive BOT, Daemon, or Service that performs the necessary tasks.
          Although in Windows environments I have also chosen to use the scheduled tasks interface in the operative system to save development time.
        </p>
        <p className="text-lg text-[#B0B0B0] leading-relaxed text-justify">
          I have also transferred this solution model to telematics processes with services on Android machines (not phones)
          to send information on completed tasks to a server and thus automate the data transfer from machines to the client company's ERP.
          This environment started to work in an environment with 80 machines and now is working with over 500 machines using my interfaces.
        </p>
      </div>

      <div className="md:col-span-1 text-center">
        <div className="text-7xl md:text-7xl font-black text-[#00AADD]">Frontend</div>
      </div>
      <div className="md:col-span-2">
        <h2 className="text-2xl font-bold mb-3 text-[#E6F7FF]">Javascript, React, Expo, Java</h2>
        <p className="text-lg text-[#B0B0B0] leading-relaxed text-justify">
          The transition from my first monolithic applications began by learning JavaScript from ES5 
          and I adapted very well to it because I had previously mastered languages such as Java or C++.
        </p>
        <p className="text-lg text-[#B0B0B0] leading-relaxed text-justify">
          At the time, during the pandemic, I focused on learning the three most widely used front-end frameworks: Angular, React and Vue;
          building simple applications with all of them and getting used to their different mechanics. After this, my first job using front-end
          technologies were with React, working for an internet provider company. There, I was able to complete a SPA application to deploy
          a payment notification form with its mobile version as a React Native app with Expo. Both apps still working nowadays.
        </p>
        <p className="text-lg text-[#B0B0B0] leading-relaxed text-justify">
          After my short time as employee, I began developing a SPA-style ERP with React, 
          mixing technologies such as Redux, Redux Thunk, Axios, Material UI and Bootstrap, among other packages.
          This development allowed me to attract clients who required customized processes and, since they were using monolithic CRM software,
          I simply developed and integrated these processes into my ERP, successfully covering their software needs.
          Today, these applications are in production and I introduce small improvements in time to time.
        </p>
      </div>

      <div className="md:col-span-1 text-center">
        <div className="text-7xl md:text-5xl font-black text-[#00AADD]">In the classroom</div>
      </div>
      <div className="md:col-span-2">
        <h2 className="text-2xl font-bold mb-3 text-[#E6F7FF]">As a teacher</h2>
        <p className="text-lg text-[#B0B0B0] leading-relaxed text-justify">
          As a System Engineer, I used to teach programming (levels 1-3) at university institute. 
          I often leverage my expertise in React ecosystem to teach courses to these students 
          and today some of them have achieved getting remote jobs as software developers or analysts.
        </p>
      </div>
    </section>
  );
};

export default DevelopmentDetails;