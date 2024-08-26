import React from "react";
import "./GymGallery.css";

const athletes = [
  {
    name: "Satyam",
    image: "/placeholder.svg?height=400&width=300",
    achievements: "3x National Powerlifting Champion",
    specialty: "Powerlifting",
    instagramHandle: "@johndoe_lifts"
  },
  {
    name: "Kaali",
    image: "/placeholder.svg?height=400&width=300",
    achievements: "Olympic Weightlifting Silver Medalist",
    specialty: "Olympic Weightlifting",
    instagramHandle: "@janesmith_oly"
  },
  {
    name: "Nitin",
    image: "/placeholder.svg?height=400&width=300",
    achievements: "CrossFit Games Finalist",
    specialty: "CrossFit",
    instagramHandle: "@mike_crossfit"
  },
  {
    name: "Aish",
    image: "/placeholder.svg?height=400&width=300",
    achievements: "IFBB Pro Bodybuilder",
    specialty: "Bodybuilding",
    instagramHandle: "@sarahlee_pro"
  },
  {
    name: "Saumy",
    image: "/placeholder.svg?height=400&width=300",
    achievements: "World's Strongest Man Competitor",
    specialty: "Strongman",
    instagramHandle: "@tomwilson_strong"
  },
  {
    name: "Emily Chen",
    image: "/placeholder.svg?height=400&width=300",
    achievements: "National Gymnastics Team Member",
    specialty: "Gymnastics",
    instagramHandle: "@emilychen_gym"
  }
];

export default function GymGallery() {
  return (
    <div className="gym-gallery">
      <h1>Our Top Athletes</h1>
      <div className="athlete-grid">
        {athletes.map((athlete, index) => (
          <div key={index} className="athlete-card">
            <div className="athlete-image-container">
              <img
                src={athlete.image}
                alt={`${athlete.name} - ${athlete.specialty}`}
                className="athlete-image"
              />
            </div>
            <div className="athlete-info">
              <h2>{athlete.name}</h2>
              <p className="athlete-achievements">{athlete.achievements}</p>
              <div className="athlete-details">
                <span className="athlete-specialty">{athlete.specialty}</span>
                <a
                  href={`https://instagram.com/${athlete.instagramHandle.slice(1)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="athlete-instagram"
                  aria-label={`Follow ${athlete.name} on Instagram`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="instagram-icon"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span className="instagram-handle">{athlete.instagramHandle}</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}