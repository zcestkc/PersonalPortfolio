import './App.scss';
import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import PortfolioPage from './Pages/PortfolioPage';
import SkillsPage from './Pages/SkillsPage';
import ExperiencePage from './Pages/ExperiencePage';
import ContactPage from './Pages/ContactPage';

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () => {
    setNavToggle(!navToggle);
  };

  const hideNav = () => {
    setNavToggle(false);
  };

  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
      <div className="main-content" onClick={hideNav}>
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/skills" exact>
              <SkillsPage />
            </Route>
            <Route path="/portfolio" exact>
              <PortfolioPage />
            </Route>
            <Route path="/experience" exact>
              <ExperiencePage />
            </Route>
            <Route path="/contact" exact>
              <ContactPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
