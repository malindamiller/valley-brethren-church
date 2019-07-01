import React, {Component} from 'react';
import "../CSS/home.css"

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <a className="headerItem">Work Experience</a>
        <a  className="headerItem">Skills</a>
        <a  className="headerItem">Resume</a>
      </div>
    )
  }
}
export default Header
