import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white m-10 border border-black rounded-md p-8">
      <h2 className="font-pacifico text-4xl text-center mb-6">About Me</h2>
      <div className="text-left text-lg space-y-4">
        <p>
          Hello! My name is Kieran. After a decade in the medical field, working
          as a physician in the NHS, I decided to transition into the exciting
          world of technology and innovation.
        </p>
        <p>
          Currently, I'm about a year into my coding journey. I have completed a
          full stack bootcamp with Founders and Coders and participated in a few
          bootcamps through Encode Club. My technical skills include experience
          with the OpenAI API, JavaScript, Node.js, HTML, CSS, and Solidity.
        </p>
        <p>
          Since 2017, I've immersed myself in crypto and Web3, becoming an active
          participant in the Ethereum community and ecosystem. I'm particularly
          excited about Zero-Knowledge Proofs and have ideas for privacy-minded builds.
        </p>
        <p>
          Come and say hi! I'm always happy to talk about technology,
          particularly when it's related to Web3 and AI.
        </p>
      </div>
    </section>
  );
};

export default About;