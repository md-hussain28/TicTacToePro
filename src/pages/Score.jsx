import React from 'react';

const Score = () => {
  const scores = [
    // Example scores; replace with dynamic data
    { player: 'Player 1', wins: 10, losses: 5 },
    { player: 'Player 2', wins: 8, losses: 7 },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">ScoreCard</h1>
      <div className="w-full max-w-md">
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4">Player</th>
              <th className="py-2 px-4">Wins</th>
              <th className="py-2 px-4">Losses</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((score, index) => (
              <tr key={index} className="border-t">
                <td className="py-2 px-4">{score.player}</td>
                <td className="py-2 px-4">{score.wins}</td>
                <td className="py-2 px-4">{score.losses}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Score;
