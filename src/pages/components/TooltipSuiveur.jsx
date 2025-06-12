import React, { useState } from "react";

export default function TooltipSuiveur() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      {/* Élément survolable */}
      <div
        className="relative text-lg font-medium text-blue-700 cursor-pointer underline"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onMouseMove={handleMouseMove}
      >
        Passe ta souris ici

        {/* Infobulle qui suit la souris */}
        {visible && (
          <div
            className="absolute z-50 bg-black text-white text-xs px-3 py-2 rounded shadow pointer-events-none"
            style={{
              top: position.y + 10,
              left: position.x + 10,
              position: "fixed", // pour suivre le curseur globalement
            }}
          >
            Prénom : Christophe
          </div>
        )}
      </div>
    </div>
  );
}
