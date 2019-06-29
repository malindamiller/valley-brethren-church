import React, {Component} from 'react';
import { Parallax, Background } from 'react-parallax';
import CollegeBlock from './collegeBlock.js'
import WorkBlock from './workBlock.js'
import Skills from './skills.js'
import Waterfall from '../images/havasu.jpg';
import "../CSS/home.css"

export class Home extends Component {
  render() {
    const insideStyles = {
      background: "black",
      opacity: 0.8,
      'font-size': '2.5em',
      color: 'white',
      padding: 20,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)"
    };
    return (
      <div>
        <Parallax bgImage={Waterfall} strength={500} blur={{ min: -1, max: 3 }}>
          <div style={{ height: 700 }}>
            <div style={insideStyles}>Malinda Kelleher</div>
            </div>
        </Parallax>
        <CollegeBlock />
        <WorkBlock />
      </div>
    )
  }
}
export default Home
