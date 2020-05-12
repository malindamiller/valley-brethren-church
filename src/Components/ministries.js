import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./header.js";
import Worship from "../images/worship.jpg";
import Prayer from "../images/prayer.jpg";
import Outreach from "../images/outreach.jpg";
import Leadership from "../images/leadership.jpg";
import Fellowship from "../images/fellowship.jpg";
import Ministry from "./ministry.js";

export class Ministries extends Component {
  render() {
    return (
      <div className="grayBackground">
            <Header />
        <br></br>
        <div>
          <Ministry
            src={Worship}
            title={"Ministry Of Worship"}
            position={"Jennie Lucchetti and Eric Yoder"}
            jobDescription={
              "We will seek to promote the worship of the true God, giving all honor and glory to God through prayer, praise and the preaching of the whole Word of God!"
            }
          />
          <Ministry
            src={Prayer}
            title={"Ministry of Prayer and Intercession"}
            position={"Cathy Szelong"}
            jobDescription={
              "We will seek the Lord's will and guidance of our church and our lives through prayer and intercession, with thanksgiving as we are led by the Holy Spirit."
            }
          />
          <Ministry
            src={Outreach}
            title={"Ministry of Outreach"}
            position={"John Zylka"}
            jobDescription={
              "We will seek to reach out to the unsaved in our neighborhoods, communities, nation and the world as commanded by Christ Himself. We will put forth a determined effort to share the Good News of Jesus Christ in both word and deed by ministering, in the love of |esus, to the needs of those outside the Church."
            }
          />
          <Ministry
            src={Fellowship}
            title={"Ministry of Fellowship and Nurture"}
            position={"Jane Yoder"}
            jobDescription={
              "We will seek to foster Christian fellowship and nurture within the Body of Christ by the caring and ministering to one another's needs and through unconditional love and forgiveness of one another as shown by our Lord and Savior Himself."
            }
          />
          <Ministry
            src={Leadership}
            title={"Ministry of Leadership and Discipleship"}
            position={"Tracey Porterfield"}
            jobDescription={
              "We will seek to discover and empower those with the gift of leadership to fulfill the leadership positions within our Church and our ministries. We will provide leadership and discipleship training as needed, to encourage and nurture those currently in leadership and those just entering leadership roles as we grow and mature"
            }
          />
        </div>
      </div>
    );
  }
}
export default Ministries;
