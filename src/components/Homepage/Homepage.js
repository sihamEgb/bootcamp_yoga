import React from "react";
import { Link } from "react-router-dom";
import workoutApi from '../../apis/workoutApi';
import './Homepage.css'
// CSS
  
class Homepage extends React.Component{
  
  constructor(props){
    super(props);
    const savedWorkouts = workoutApi.getWorkouts();
    this.welcomeWorkout = savedWorkouts[0];
    this.state = {hover:false}
    // <Link 
    // 	to={{pathname:`/workouts/${workout.id}`,
    // 	workout: workout}}
    // >
    
  }
 
  hoverStart = () => {
    this.setState({hover: true})
  }
  hoverEnd = () => {
    console.log("leaving");
    this.setState({hover: false})
  }

  render(){
    let titleClassName = '';
    if (this.state.hover) 
    {
      console.log("state chanfed",this.state.hover);
      titleClassName = 'textEffects';
    } 

      return (
          <div className="homepage-bodyContainer">
            <div className="homepage-contentContainer">
              <div className='homepage-subtitle'>Embrace your own pace</div>
              <div className='homepage-mainTitle'>All you need to know in one app</div>
              {/* <div className = {`homepage-mainTitle ${titleClassName}`}
                onMouseEnter={this.hoverStart} 
                onMouseLeave={this.hoverEnd}
              > Movement is the song of the body</div> */}
              <div className='homepage-mainAction '
              >
                <Link 
                  className='homepage-link'
                  to={{pathname:`/workouts/${this.welcomeWorkout.id}`,
                  workout: this.welcomeWorkout}}
                > 
                Start your workout</Link>
              </div>

            </div>


          </div>
        );
    }  
   
}

export default Homepage;
