import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from "react";
import JsonData from "./data/data.json";
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Gallery from './Components/Gallery';
// import SmoothScroll from "smooth-scroll";
import "./App.css";

// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// });

function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div className='App'>

      <Router>
      <Header/>
        <Switch>
        <Route exact path='/' component={() => <Home data={landingPageData.Home}/>} />
        <Route exact path='/home' component={Home} data={landingPageData.Home}/>
        <Route exact path='/about' component={About} />
        <Route exact path='/gallery' component={Gallery} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;






