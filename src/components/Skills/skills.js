import React from "react";
import "./skills.css";

import Casa from "../../assets/casa.png";
import Design from "../../assets/design-thinking.png";
import Plan from "../../assets/planificacion.png";

function Skills() {
  return (
    <section id="skills">
      <span className="skillTitle"> What I do </span>
      <span className="skillDesc">
        {" "}
        Voluptate et ullamco laborum exercitation occaecat enim culpa ad duis
        minim incididunt. Ex nulla irure proident nulla commodo duis irure qui
        commodo Lorem ut aute. Magna amet ad aute amet nisi ut. Ipsum qui nisi
        ex in consequat reprehenderit.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={Casa} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Service 1</h2>
            <p> This is a demo text, you can write your own content here</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Design} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Service 2</h2>
            <p> This is a demo text, you can write your own content here</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Plan} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Service 3</h2>
            <p> This is a demo text, you can write your own content here</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
