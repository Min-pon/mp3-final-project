import React from "react";

function Notfound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
      <div className="max-w-md mx-auto text-center">
        <div className="relative mb-12">
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="w-48 h-48 rounded-full bg-[#DEF81C] blur-3xl animate-pulse"></div>
          </div>
          <h1 className="text-9xl font-bold text-gray-800 relative z-10 drop-shadow-lg">
            404
          </h1>
        </div>
        <h2 className="text-4xl font-semibold mb-6 text-gray-800">
          <span className="text-gray-500">Oops!</span> Page not found
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          It seems the page you're looking for has gone astray in our online
          store. We apologize for the inconvenience.
        </p>
        <a
          href="/"
          className="inline-flex items-center px-8 py-4 bg-[#DEF81C] text-gray-800 font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-300 shadow-lg"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}

export default Notfound;
