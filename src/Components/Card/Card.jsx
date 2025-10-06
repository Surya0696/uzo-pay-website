import React, { forwardRef } from "react";
import "./Card.css";

const Card = forwardRef(({ icon, title, desc }, ref) => {
  return (
    <div className="card" ref={ref}>
      <div className="icon">
        <img src={icon} alt={`${title} Icon`} />
      </div>
      <h3 style={{ fontSize: "22px", fontWeight: "400", marginBottom: "16px" }}>
        {title}
      </h3>
      <p style={{ fontSize: "15px", fontWeight: "400" }}>{desc}</p>
      <div className="arrow">
        <p>→</p>
      </div>
    </div>
  );
});

export default Card;
