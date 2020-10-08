import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = (props) => {
  console.log("Header",props);
  return (
    <div className='footerContainer'>
			<div className='footerContent'>
				<div>
					Frontend Project - Yoga App
				</div>
				<div> by, Siham Egbaria </div>
				<div> Apple Seeds Bootcamp 2020 </div>
				<div> visit my
				<a className='header-link'
				href="https://github.com/sihamEgb">Profile</a>
				</div>
			</div>
		</div>
		/* <Link to='/' className='headerItem'>Homepage</Link>
      <Link className='headerItem'
      to={{
        pathname:'/poses' ,
        state: {poses: props.poses}
      }}
      >All Poses</Link>
			 <Link className='headerItem'
      to={{
        pathname:'/workouts' ,
        state: {poses: props.poses}
      }}
      >Workouts</Link> */
  );
};

export default Footer;
