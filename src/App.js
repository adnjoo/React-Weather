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
        bg-gradient-to-r from-blue-100 to-blue-300 mycontainerdiv"
        >
        <Weather />
      </div>
      <Footer />
    </div>
  );
}

export default App;
