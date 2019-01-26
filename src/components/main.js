import React from 'react';
import { Switch, Route} from 'react-router-dom';
import LandingPage from './Pages/Landing/Landing';
import AboutMe from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Projects from './Pages/Projects/Projects';
import Resume from './Pages/Resume/Resume';

const main = () =>  (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
)

export default main
