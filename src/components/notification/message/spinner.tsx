import React from "react";
const Spinner = () => {
  return (
    <div className="spinner-container m-auto">
      <div className="spinner"></div>
      <style jsx>{`
        .spinner-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 30px;
          width: 30px;
        }
        .spinner {
          border: 4px solid transparent; /* Light grey */
          border-top: 4px solid rgb(83 250 251 / var(--tw-bg-opacity)); /* Blue */
          border-left: 4px solid rgb(83 250 251 / var(--tw-bg-opacity)); /* Blue */
          border-radius: 50%;
          width: 30px;
          height: 30px;
          animation: spin 1s linear infinite;
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

export default Spinner;
