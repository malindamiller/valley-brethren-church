import React, {Component} from 'react';
import Git from '../images/github.png';
import LinkedIn from '../images/linkedin.jpg';
import Resume from '../images/resume.png';
import Gmail from '../images/gmail.png';
import "../CSS/home.css"

export class Footer extends Component {
  render() {
    return (
      <div className="grayBackground footer">
          <h3>{"I'd Love To Hear From You!"}</h3>
            <div className="icons">
              <a href = "mailto:malindamiller2016@gmail.com"><img className ='contactImg' src={Gmail}></img></a>
              <a href = "https://github.com/malindamiller"><img className ='contactImg' src={Resume}></img></a>
              <a href = "https://www.linkedin.com/in/malindadmiller"><img className ='contactImg' src={LinkedIn}></img></a>
              <a href = "https://github.com/malindamiller"><img className ='contactImg' src={Git}></img></a>
            </div>
        </div>
    )
  }
}
export default Footer
