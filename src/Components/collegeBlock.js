import React, {Component} from 'react';
import Background from '../images/havasu.jpg';
import PSU from '../images/grad.jpg';
import "../CSS/home.css"

export class CollegeBlock extends Component {
  render() {
    return (
      <div>
        <h3>- Penn State Behrend 2016 -</h3>
        <div className="twoCol">
        <div className="halfWidthLeft">
          <p>I graduated from Penn State Behrend in 2016 with a degree in
              Software Engineering. I started for the varsity tennis team for four years
              I also participated in the Lion Ambassador and Lion Scout Programs where I gave campus tours to potential incoming students
              </p>
          </div>
          <div className="halfWidthRight">
            <img alt="" src={PSU} className="collegeImage"></img>
          </div>
        </div>
      </div>
    )
  }
}
export default CollegeBlock
