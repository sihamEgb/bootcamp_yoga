import React from "react";
import { Link } from "react-router-dom";
// import '../css/homepage.css'

const Header = (props) => {
  console.log("Header",props);
  return (
    <div className='header'>
			<Link to='/' className='item'>Homepage</Link>
      <Link className='item'
      to={{
        pathname:'/poses' ,
        state: {poses: props.poses}
      }}
      >All Poses</Link>
			 <Link className='item'
      to={{
        pathname:'/workouts' ,
        state: {poses: props.poses}
      }}
      >Workouts</Link>
    </div>
  );
};

export default Header;
