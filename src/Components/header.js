import React, { Component } from "react";
import "../CSS/home.css";
import ResponsiveMenu from 'react-responsive-navbar';
import { ICON_NAME } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";

export class Header extends Component {
  render() {
    return (
      <ResponsiveMenu
        menuOpenButton={<div className="iconBack"><FaBars /></div>}
        menuCloseButton={<div className="iconBack"><FaWindowClose /></div>}
        changeMenuOn="500px"
        largeMenuClassName="menuBody"
        smallMenuClassName="smallMenu"
        menu={
          <ul className="menu">
          <li className="menu-item"><a href="/">Home</a></li>
          <li className="menu-item"><a href="./calendar">Calendar</a></li>
          <li className="menu-item"><a href="./outreaches">Outreach</a></li>
          <li className="menu-item"><a href="./ministries">Ministries</a></li>
          <li className="menu-item"><a href="./about">About</a></li>
          </ul>
        }
      />
    );
  }
}
export default Header;
