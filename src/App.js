import React from "react";
import Weather from "./components/weather";
import Footer from "./components/footer";

import { Helmet } from 'react-helmet';

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

//font awesome
library.add(fab)

function App() {
  return (
    <div>
      <Helmet>
        <title>{ 'React Weather' }</title>
        <style>{'body { background-color: beige; }'}</style>
      </Helmet>
      <div
      // tailwind styling for container div
        className="border border-l-8 border-blue-500 shadow rounded-lg
        py-2 px-8 m-10 md:m-20 mt-20
        grid justify-center
        bg-gradient-to-r from-blue-100 to-blue-300"
        >
        <Weather />
      </div>
      <Footer />
    </div>
  );
}

export default App;
