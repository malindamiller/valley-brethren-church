import React, {Component} from 'react';
import ReactStars from 'react-stars'
import "../CSS/home.css"

export class Skills extends Component {
  render() {
    return (
      <div>
      <div className="flex">
        <div className="skillCol">
          <label>{this.props.name}</label>
        </div>
        <div className="skillCol">
          <ReactStars
            count={5}
            value={this.props.rating}
            size={24}
            edit= {false}
            color2={'#0c4070'} />
        </div>
        </div>
      </div>
    )
  }
}
export default Skills
