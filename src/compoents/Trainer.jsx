import React from "react";
import "./Trainer.css"; 
import image from "../assets/frontCarousel/front1.jpg"
import image2 from "../assets/frontCarousel/front4.jpg"

const trainers = [
  {
    name: "Aishwaraya omar",
    role: "Certified Personal Trainer",
    bio: "Aishwaraya is a certified personal trainer with over 10 years of experience. He specializes in strength training and sports-specific conditioning.",
    image: image,
  },
  {
    name: "Aniket Gupta",
    role: "Certified Yoga Instructor",
    bio: "Aniket is a certified yoga instructor with a passion for helping her students find balance and inner peace through the practice of yoga.",
    image:image2
  },
  
];

function Trainers() {
  return (
    <div className="trainers-container">
      <h2 className="trainers-title">Meet Our Trainers</h2>
      <p className="trainers-description">
        Our experienced trainers are dedicated to helping you achieve your fitness goals.
      </p>
      <div className="trainers-grid">
        {trainers.map((trainer, index) => (
          <div key={index} className="trainer-card">
            <div className="trainer-info">
              <div className="trainer-avatar">
                <img src={trainer.image} alt={trainer.name} className="avatar-image" />
              </div>
              <div className="trainer-details">
                <h3 className="trainer-name">{trainer.name}</h3>
                <p className="trainer-role">{trainer.role}</p>
              </div>
            </div>
            <p className="trainer-bio">{trainer.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trainers;
