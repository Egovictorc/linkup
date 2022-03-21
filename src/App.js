import logo from './logo.svg';
import './App.css';
import "./bootstrap-5.1.3-dist/css/bootstrap.min.css"

// components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LinkUpAction from './components/LinkUpAction';
import Step from './components/Step';

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

        <Step title="Request an Artisan"
          meta="Dial the USSD code and request close to you. We have made this process as easy as possible"
          src="/images/contact@2x.png"
          alt="request"
        />
        <Step title="Get a quote"
          meta="Our skilled artisans will give you a quote for the required job to be done, don't worry this price is standardized and regulated by us"
          src="/images/discount@2x.png"
          alt="request"
        />
        <Step title="Get your Job done"
          meta="Our skilled artisans are adequately skilled to get the job done. 100% guarantee"
          src="/images/validate@2x.png"
          alt="request"
        />
        <Step title="We provide you with the best Artisans around You"
          meta="With our rating system, we make sure you get only the best Artisans to help you with your task. Remember to always leave a review"
          src="/images/review@2x.png"
          alt="request"
        />
      </div>
  
      <footer>
        &copy; {new Date().getFullYear}
      </footer>
    </div>
  );
}

export default App;
