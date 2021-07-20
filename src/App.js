import React from "react";

import Weather from "./components/weather";



function App() {
  return (
    <div
      className="border border-l-8 border-blue-500 shadow rounded-lg
      py-2 px-8 m-20 mt-20
      grid justify-center
      bg-gradient-to-r from-blue-50 to-blue-100
    "
    >
      <div className="text-2xl mx-auto">Weather App</div>
      <Weather />
    </div>
  );
}

export default App;
