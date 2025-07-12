import React, { useEffect, useState } from "react";

const GridAnimation = () => {
  const [activeCells, setActiveCells] = useState([]);
  const numRows = 15;
  const numCols = 30;

  useEffect(() => {
    const interval = setInterval(() => {
      const newActiveCells = Array.from({ length: 10 }, () => {
        const row = Math.floor(Math.random() * numRows);
        const col = Math.floor(Math.random() * numCols);
        return `${row}-${col}`;
      });
      setActiveCells(newActiveCells);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const renderGrid = () => {
    const rows = [];
    for (let row = 0; row < numRows; row++) {
      const cols = [];
      for (let col = 0; col < numCols; col++) {
        const isActive = activeCells.includes(`${row}-${col}`);
        cols.push(
          <div
            key={`${row}-${col}`}
            className={`w-8 h-10 m-0.5 border border-gray-200 ${
              isActive ? "bg-purple-600 animate-pulse" : "bg-transparent"
            }`}
          />
        );
      }
      rows.push(
        <div key={row} className="flex">
          {cols}
        </div>
      );
    }
    return rows;
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div>{renderGrid()}</div>
    </div>
  );
};

export default GridAnimation;
