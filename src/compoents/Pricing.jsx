import React from 'react';
import "../assets/styling/Pricing.css";
import toast from 'react-hot-toast';
import { useToast } from '@chakra-ui/react';

const Pricing = ({ title, tagline, price, features, features1, features2, features3, buttonText }) => {
  const toast= useToast();
  function clickHandler(){
    toast({
      title: 'Narsingha Fitness club Address',
      description: "Visit us at Ganeshi Lal Market, Takiz Rd, Birshibpur, Ghatampur, Uttar Pradesh 209206. For more details, call us at 700-757-2920.",
      status: 'success',
      duration: 5000,
      isClosable: true,
      position: 'top-right',
  });
  }
  return (
    <div className='header'>
    <div className="card">
      <div className="card__border"></div>
      <div className="card_title__container">
        <span className="card_title"> {title}</span>
        <p className="card_paragraph">
        {tagline}
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
          <span className="list_text">{price}</span>
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
          <span className="list_text">{features}</span>
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
          <span className="list_text">{features2}</span>
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
          <span className="list_text">{features1}</span>
        </li>
       
      </ul>
      <button onClick={clickHandler} className="button">{buttonText}</button>
      
    </div>
    </div>
  );
};

export default Pricing;
