import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <div className="w-full max-w-2xl text-center space-y-4">
        <p className="text-lg">
          Welcome to Ultimate Tic-Tac-Toe! This game was developed by Vega and his team using React and Tailwind CSS.
        </p>
        <p className="text-lg">
          Our goal is to provide a fun and challenging experience for all players. Enjoy the game and let us know what you think!
        </p>
        <p className="text-lg">
          You can find more about us on our <a href="#" className="text-blue-500">GitHub</a> or follow us on <a href="#" className="text-blue-500">Twitter</a>.
        </p>
      </div>
    </div>
  );
};

export default About;
