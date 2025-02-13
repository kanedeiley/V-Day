import { useEffect, useRef } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Contact, Experience, Love, Navbar, Portfolio } from "./components";

const App = () => {
  const wrapperRef = useRef(null);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <div className='wrapper' ref={wrapperRef}>
          <div id="start" className='z-10'>
            <Love scrollContainer={wrapperRef} />
          </div>
          <div id="memories" className='relative z-30 bg-primary mt-[-2px]'>
            <Portfolio />
          </div>
          <div id="milestones" className='relative z-30 bg-primary'>
            <Experience />
          </div>
          <div id="?" className='relative z-30 bg-primary'>
            <Contact />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
