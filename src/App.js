import 'bootstrap/dist/css/bootstrap.min.css';

// import Slider from './Slider/Slider'
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Stories from './Components/Stories/Stories';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
<NavBar/>
    {/* <Testimony/> */}
        {/* <Display /> */}
       
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='/stories'>
            <Stories></Stories>
          </Route>
     <Route path='*'>
<NotFound></NotFound>
     </Route>

        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;
