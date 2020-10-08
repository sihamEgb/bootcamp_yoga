import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// APIS
// import yogaAPI from '../apis/yogaApi';

// import Homepage from "./Homepage";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import PosesManager from './PosesManager/PosesManager';
import Pose from './Pose/Pose';
import WorkoutsManager from './WorkoutManager/WorkoutsManager';
import Workout from './Workout/Workout';
import Session from './Session/Session';
import Homepage from './Homepage/Homepage';
// CSS
import './App.css';
import yogaData from '../data/yogaData'
class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      poses:null,
    };

  }
  componentDidMount(){
    console.log("111111111");
    this.getYogaData();
    console.log("222222");
   
  }
  getYogaData = async () =>{
    
    this.setState({poses:yogaData.getData()});

    
  //   try{
  //     console.log("fetching data");
  //     const response = await yogaAPI.get('');
  //     console.log("GGGGGG",response);
  //     this.setState({poses:response.data});
  //     //yogaData.setData(response.data);
  //   }catch(err){
  //     console.log("Please handle error in API");
  //   }
  }
  
 
  render(){
   
      return (
          <div className="root">
             
             <BrowserRouter>
                <div>
                  <Header className="headerContainer"
                  poses = {this.state.poses}
                  />
                </div>

                <div className="bodyContainer">
                    <Route exact path='/' component={Homepage} />
                    <Route exact path='/poses' component={PosesManager} />
                    <Route exact path='/poses/:id' component={Pose} />

                    <Route exact path='/workouts' component={WorkoutsManager} />
                    <Route exact path='/workouts/:id' component={Workout} />
                    
                    <Route exact path='/session' component={Session} />
                    
                    {/* <Route exact path='/newworkout component={WorkoutNew} /> */}
                    {/* <Route exact path='/history' component={History2} /> */}

                </div>
                <div className="footerContainer">
                  <Footer/>
                </div>
            </BrowserRouter>
          </div>
        );
    }  
   
}

export default App;
