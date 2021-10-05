import React from 'react';
import Booking from '../Booking/Booking';
import Cheaf from '../Cheaf/Cheaf';
import Footer from '../Footer/Footer';
import MasterCheaf from '../MasterCheaf/MasterCheaf';
import Menu from '../Menu/Menu';
// import Cheaf from '../Cheaf/Cheaf';
// import Carousal from '../Carousal/Carousal';
import NavBar from '../NavBar/NavBar';
import Posts from '../Posts/Posts';
import './Home.css';
const Home = () => {
    return (
        <div>
         
          {/* <Cheaf></Cheaf> */}
          <Cheaf />
        <Menu/>
        <MasterCheaf />
        <Booking/>
        <Posts/>
      
        </div>
    );
};

export default Home;