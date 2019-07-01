import React, { Component } from "react";
import Spiffy from "../images/spiffy.png";
import Fidelity from "../images/fidelity.png";
import Bettis from "../images/Bettis.jpg";
import PPG from "../images/ppg.png";
import Job from "./job.js";
import "../CSS/home.css";

export class WorkBlock extends Component {
  render() {
    return (
      <div className="grayBackground">
        <br></br>
        <h3>- Work Experience -</h3>
        <div>
          <Job
            src={Spiffy}
            title={"Get Spiffy"}
            position={"Full Stack Engineer"}
            location={"Durham, NC"}
            dateRange="March 2017 - present"
            jobDescription={
              "I redesigned the consumer web booking portal in react with a modern responsive UI. I separated it from our existing Ruby on Rails backend system, and communicated though API's. I build an Asset Schedule in react, which keeps track of the appointments for the day and allows Admins to drag and drop appointments to assign them to technicians. I also worked on multiple Ruby on Rails project. The most significant was a payroll system that allowed General Managers to enter technician hours and overtime and total pay would be calculated automatically. The payroll system was compatitable with all US timezones and also allowed HR employees to export the data to an external system for additional tracking. "
            }
          />
          <Job
            src={Fidelity}
            title={"Fidelity Investments"}
            position={"Associate Software Engineer"}
            location={"Durham, NC"}
            dateRange="June 2016 - March 2017"
            jobDescription={
              "I worked as a Java and Angular Developer on the Cash Management Team. Currently I am working on an Angular application which tracks customer deposits, and testing it using Karma. I followed an agile methodology to build a dashboard project for displaying metrics about applications using Angular 2.0. I also completed the LEAP training program, covering technical skills and software engineering techniques "
            }
          />
          <Job
            src={PPG}
            title={"PPG Industries"}
            position={"Automotive Refinish IT Intern"}
            location={"Pittsburgh, PA"}
            dateRange="Summer 2015"
            jobDescription={
              "I developing an User Approval process that will allow an outdated Color Formula application to be discontinued. This new User Approval process will be located inside an existing web Application and will include expanded functionality such as a better search. The project included technologies such as .NET, C#, Microsoft SQL Server, HTML5, CSS and JavaScript."
            }
          />
          <Job
            src={Bettis}
            title={"Bettis Atomic Power Laboratories"}
            position={"Technical Intern"}
            location={"West Mifflin"}
            dateRange="Summer 2014"
            jobDescription={
              "I worked in the Software Verification group where I contributed to the qualification of Instrumentation and Control equipment in support of the United States Navy fleet. My project entailed the design of test cases for automated regression testing of graphic displays. I also worked with LabVIEW to develop tools for the enhancement of the automated testing process of graphic display screens. I obtained a Department of Energy security clearance."
            }
          />
        </div>
      </div>
    );
  }
}
export default WorkBlock;
