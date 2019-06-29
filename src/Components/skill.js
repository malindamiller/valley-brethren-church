import React, {Component} from 'react';
import ReactStars from 'react-stars'
import Skill from './skill.js'
import "../CSS/home.css"

export class Skills extends Component {
  render() {
    return (
      <div>
      <div className="flex">
        <label>{this.props.name}</label>
        <ReactStars
          count={5}
          value={this.props.rating}
          size={24}
          edit= {false}
          color2={'#0c4070'} />
        </div>
      </div>
    )
  }
}
export default Skills
