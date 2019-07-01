import React, { Component } from "react";
import "../CSS/home.css";

export class Job extends Component {
  render() {
    return (
      <div>
        <div className="twoCol">
          <div className="halfWidthLeft">
            <img className="workLogo" alt="" src={this.props.src}></img>
          </div>
          <div className="halfWidthRight">
            <h3 className="jobTitle">{this.props.title}</h3>
            <h6 className="jobSubheader">
              {this.props.position} - {this.props.location}
            </h6>
            <h6 className="jobSubheader">{this.props.dateRange}</h6>
            <p className="description">{this.props.jobDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Job;
