import logo from './logo.svg';
import './App.css';
import "./bootstrap-5.1.3-dist/css/bootstrap.min.css"

// components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LinkUpAction from './components/LinkUpAction';
import Step from './components/Step';

import steps from "./components/steps"

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <LinkUpAction />
      <div className="container">
        <div className="row m-auto">
          <div className="col-auto mx-auto mt-5 mb-3">
            <h4>How It Works</h4>
          </div>
        </div>
        {
          steps.map(({ title, meta, src, alt }, index) => (
            <Step title={title} meta={meta} src={src}
              alt={alt} key={src} index={index} />
          ))
        }
      </div>

      <div className="container py-3 bg-light">
        <footer className='row w-100'>
          <div className="col-auto text-align: center mx-auto">
            All rights reserved &copy; {new Date().getFullYear()}
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
