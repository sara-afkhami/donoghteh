import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from "react";
import JsonData from "./data/data.json";
import Header from './Components/Header';
import Home from './Components/Home';
import Gallery from './Components/Gallery';
import ThreePartPage from './Components/ThreePartPage';
import Profile from './Components/Profile';
import Career from './Components/Career';
import ContactUs from './Components/ContactUs';
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
    <div className='app'>

      <Router>
      <Header/>
        <Switch>
        <Route exact path='/' component={() => <Home data={landingPageData.Home}/>} />
        <Route exact path='/home' component={Home} data={landingPageData.Home}/>
        <Route exact path='/gallery' component={Gallery} />
        <Route exact path='/threepartpage' component={() => <ThreePartPage data={landingPageData.ThreePartPage} />} />
        <Route exact path='/profile' component={() => <Profile data={landingPageData.ThreePartPage} />} />
        <Route exact path='/career' component={() => <Career data={landingPageData.ThreePartPage} />} />
        <Route exact path='/contactus' component={() => <ContactUs data={landingPageData.ContactUs} />} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;






