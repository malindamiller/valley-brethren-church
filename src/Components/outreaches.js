import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./header.js";
import Ministry from "./ministry.js";
import Maria from "../images/maria.png";
import Food from "../images/foodbank.png";

export class Outreaches extends Component {
  render() {
    return (
      <div className="grayBackground">
            <Header />
        <br></br>
        <div>
          <Ministry
            src={Food}
            title={"Laurel Mountain Food Pantry"}
            position={null}
            jobDescription={
              "Distribution is the second Thursday of each month at 10:00 at the Donegal Community Center. New applicants can enroll in person at that time. You must be a resident of Westmoreland County. Please bring proof of residency. You will also need information about your income, but no proof is needed. For information contact Lynne Donnelly at 724-610-1925"
            }
          />
          <Ministry
            src={Maria}
            title={"Puerto Maldonado Orphanage"}
            position={null}
            jobDescription={
              "Valley Brethren Church supports this orphanage located in Peru with monthly donations. We also sponsor a child, Maria. For more information join the Puerto Maldonado Task Force on Facebook."
            }
          />
          <Ministry
            src={null}
            title={"Missionary Highlight"}
            position={null}
            jobDescription={
              "We support many missionaries both at home and abroad. This month we are highlighting missionaries in Boalsburg, Pa. Ben and Shannon Franks run the New Hope church which ministers to Penn State students. According to their newsletter; On Sunday May 3rd, the week before finals, we had our yearly commissioning service for our graduating Seniors. They had an opportunity to talk about what the Lord is doing in their lives, and then we exhorted them to be salt and light in the world. Finally we gathered around them, prayed and gave them their official New Hope salt shaker. It was a sad but good moment in ministry."
            }
          />

        </div>
      </div>
    );
  }
}
export default Outreaches;
