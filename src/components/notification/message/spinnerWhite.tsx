import React from "react";
const SpinnerWhite = () => {
  return (
    <div className="loader-container m-auto">
      <div className="loader"></div>
      <style jsx>{`
        .loader-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 30px;
          width: 30px;
        }
        .loader {
          border: 4px solid transparent; /* Light grey */
          border-top: 4px solid white; /* Blue */
          border-left: 4px solid white; /* Blue */
          border-radius: 50%;
          width: 30px;
          height: 30px;
          animation: spin 1.5s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default SpinnerWhite;
