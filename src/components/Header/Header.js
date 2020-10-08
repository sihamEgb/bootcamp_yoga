import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

// import  imageLogo from '../images/png-clipart-chakra-meditation-watercolor-painting-yoga-yoga-computer-wallpaper-sports.png';
const Header = (props) => {
  console.log("Header",props);
  return (
    <div className='header-container'>
        <Link 
            className='header-logo header-nav-item'
            to='/' 
        >
            {/* <img
              alt='yoga logo'
              className="header-logo-icon"
              src= {imageLogo}
              /> */}
              Homepage
            </Link>
      <div className='header-nav'>
      
          <Link 
              className='header-nav-item'
              to={{
              pathname:'/poses' ,
              state: {poses: props.poses}
              }}
          >
            All Poses</Link>
          <Link 
          className='header-nav-item'
              to={{
                pathname:'/workouts' ,
                state: {poses: props.poses}
              }}
          >
            Workouts</Link>
        </div>

      </div>
  );
};

export default Header;
