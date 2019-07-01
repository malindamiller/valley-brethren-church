import React, {Component} from 'react';
import Skill from './skill.js'
import "../CSS/home.css"

export class Skills extends Component {
  render() {
    return (
      <div>
        <h3>- Skills -</h3>
            <Skill name={"Javascript"} rating={5} />
            <Skill name={"React"} rating={5} />
            <Skill name={"Ruby on Rails"} rating={5} />
            <Skill name={"HTML"} rating={5} />
            <Skill name={"CSS"} rating={5} />
            <Skill name={"SQL"} rating={4} />
            <Skill name={"JQuery"} rating={4} />
            <Skill name={"Git"} rating={4} />
            <Skill name={"Java"} rating={3} />
            <Skill name={"C#"} rating={3} />
            <Skill name={"Jira"} rating={2} />
            <Skill name={"AWS"} rating={1} />

      </div>
    )
  }
}
export default Skills
