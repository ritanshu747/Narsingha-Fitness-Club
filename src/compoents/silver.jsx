import React from 'react';
import "../assets/styling/Pricing.css";

const silver= ({ title, tagline, price, features, features1, features2, features3, buttonText }) => {
  return (
    <div className="card">
      <div className="card__border"></div>
      <div className="card_title__container">
        <span className="card_title">Gold Membership {title}</span>
        <p className="card_paragraph">
         Shape your life
        </p>
      </div>
      <hr className="line" />
      <ul className="card__list">
        <li className="card__list_item">
          <span className="check">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="check_svg"
            >
              <path
                fillRule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <span className="list_text">800 RS for one month</span>
        </li>
        <li className="card__list_item">
          <span className="check">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="check_svg"
            >
              <path
                fillRule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <span className="list_text">Access to all gym accessories</span>
        </li>
        <li className="card__list_item">
          <span className="check">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="check_svg"
            >
              <path
                fillRule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <span className="list_text">Get worth of 50 rupees voucher</span>
        </li>
        <li className="card__list_item">
          <span className="check">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="check_svg"
            >
              <path
                fillRule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <span className="list_text">Posing Room</span>
        </li>
       
      </ul>
      <button className="button">Join Silver</button>
    </div>
  );
};

export default silver;
