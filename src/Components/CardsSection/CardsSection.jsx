import React from "react";
import Card from "../Card/Card";
import "../CardsSection/CardsSectionStyle.css";

const data = [
  {
    title: "UPI Autopay",
    desc: "Automate your payments with UPI Autopay, ensuring timely transactions without manual effort.",
    icon: "/Assets/Card1.svg",
  },
  {
    title: "API Banking",
    desc: "Integrate financial services seamlessly into your applications with our robust API banking solutions.",
    icon: "/Assets/Card2.svg",
  },
  {
    title: "Payouts",
    desc: "Deliver payouts swiftly and securely, ensuring timely disbursement to employees, partners, or clients.",
    icon: "/Assets/Card3.svg",
  },
  {
    title: "Bulk Payments",
    desc: "Process multiple payments at once, saving time and reducing errors with bulk payment options.",
    icon: "/Assets/Card4.svg",
  },
];

const CardsSection = () => {
  return (
    <div className="cards-container">
      {data.map((item, i) => (
        <div key={i}>
          <Card {...item} />
        </div>
      ))}
    </div>
  );
};

export default CardsSection;
