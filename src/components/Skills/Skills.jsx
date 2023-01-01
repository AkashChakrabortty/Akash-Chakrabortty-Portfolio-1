import React from 'react';

const Skills = () => {
    return (
      <div id="skills" className="font-color w-3/4 mx-auto">
        <h1 className="lg:text-5xl text-4xl font-bold text-center font-color">
          Skills
        </h1>
        <div class="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3  gap-4 my-4">
          <div className="border border-success text-center p-4 rounded animate-bounce default-skills-bg">
            HTML-5
          </div>
          <div className="border border-success text-center p-4 rounded animate-bounce default-skills-bg">
            CSS-3
          </div>
          <div className="border border-success text-center p-4 rounded animate-bounce default-skills-bg">
            Bootstrap
          </div>
          <div className="border border-success text-center p-4 rounded animate-bounce default-skills-bg">
            Tailwind
          </div>
          <div className="border border-success text-center p-4 rounded animate-bounce default-skills-bg">
            React
          </div>
          <div className="border border-success text-center p-4 rounded animate-bounce default-skills-bg">
            Firebase
          </div>
          <div className="border border-success text-center p-4 rounded animate-bounce default-skills-bg">
            Express.js
          </div>
          <div className="border border-success text-center p-4 rounded animate-bounce default-skills-bg">
            MongoDB
          </div>
        </div>
      </div>
    );
};

export default Skills;