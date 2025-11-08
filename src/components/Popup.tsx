import React, { useState } from "react";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]"
      onClick={(e) => e.target === e.currentTarget && setIsVisible(false)}
    >
      <div className="relative w-[500px] max-w-[90%] slide-down-animation">
        {/* Popup Image */}
        <img
          src="/popup.jpg"
          alt="Grand Launch 2026"
          className="w-full h-auto object-cover"
        />

        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 bg-white/30 hover:bg-white/50 text-white font-bold w-8 h-8 flex items-center justify-center transition"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Popup;
