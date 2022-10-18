import Topbar from "./components/Topbar/Topbar";
import Portfolio from "./components/Portfolio/Portfolio"
import Intro from "./components/intro/Intro" 
import Testimonials from "./components/Testimonials/Testimonials"
import Works from "./components/Works/Works"
import Contact from "./components/Contact/Contact"
import './app.scss'
function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
       <Intro/>
       <Portfolio/>
       <Testimonials/>
       <Works/>
       <Contact/>
       </div>

    </div>
  );
}

export default App;
