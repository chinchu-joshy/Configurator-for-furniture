import React from "react";
import { chairColors, cushionColors, UseCustomization } from "../Context/Customization";

function Configurator() {
  const {
    material,
    setMaterial,
    setLegs,
    legs,
    chairColor,
    setChairColor,
    cushionColor,
    setCushionColor,
  } = UseCustomization();

  
  return (
    <div className="configurator">
      <div className="configurator_section">
        <div className="configurator_section_title">Chair Material</div>
        <div className="configurator_section_values">
          <div
            className={`item ${material === "leather" ? "item--active" : ""}`}
            onClick={() => setMaterial("leather")}
          >
            <div className="item_label">Leather</div>
          </div>
          <div
            className={`item ${material === "fabric" ? "item--active" : ""}`}
            onClick={() => setMaterial("fabric")}
          >
            <div className="item_label">Fabric</div>
          </div>
        </div>
      </div>
      <div className="configurator_section">
        <div className="configurator_section_title">Cushion Color</div>
        <div className="configurator_section_values">
          {cushionColors.map((item, index) => {
            return (
              <div
                key={index}
                className={`item ${
                  item.color === cushionColor.color ? "item--active" : ""
                }`}
                onClick={() => setCushionColor(item)}
              >
                <div className="item_dot" style={{backgroundColor:item.color}}>

                </div>
                <div className="item_label">{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="configurator_section">
        <div className="configurator_section_title">Chair Legs</div>
        <div className="configurator_section_values">
          <div
            className={`item ${legs === true ? "item--active" : ""}`}
            onClick={() => setLegs(true)}
          >
            <div className="item_label">Design</div>
          </div>
          <div
            className={`item ${legs === false ? "item--active" : ""}`}
            onClick={() => setLegs(false)}
          >
            <div className="item_label">Classic</div>
          </div>
        </div>
      </div>
      <div className="configurator_section">
        <div className="configurator_section_title">Chair Color</div>
        <div className="configurator_section_values">
          {chairColors.map((item, index) => {
            return (
              <div
                key={index}
                className={`item ${
                  item.color === chairColor.color ? "item--active" : ""
                }`}
                onClick={() => setChairColor(item)}
              >
                <div className="item_dot" style={{backgroundColor:item.color}}>

                </div>
                <div className="item_label">{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Configurator;
