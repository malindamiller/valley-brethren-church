 import React, { Component } from "react";
 import Header from "./header.js";
 import "../CSS/home.css";

 export class Calendar extends Component {
   render() {
     var style = {
       border: 0,
       width:"800px",
       height:"600px",
       frameborder:"0px",
       scrolling: "no"
     }
     return (
       <div className="calendar">
       <Header />
       <h1 className="title">Event Calendar</h1>
       <center><iframe src="https://calendar.google.com/calendar/embed?src=valleybrethrenchurch%40gmail.com&ctz=America/New_York"
       style={style}>
        </iframe></center>
       </div>
     );
   }
 }
 export default Calendar;
