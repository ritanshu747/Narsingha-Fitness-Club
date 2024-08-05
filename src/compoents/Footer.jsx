import React from "react";
import { Link } from "react-router-dom"; // React Router for navigation
import './Footer.css'; // Import your CSS file

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="section">
          <h4>Social</h4>
          <nav className="nav">
            <Link to="#" className="nav-link">
              <FacebookIcon className="icon" />
              Facebook
            </Link>
            <Link to="#" className="nav-link">
              <TwitterIcon className="icon" />
              Twitter
            </Link>
            <Link to="#" className="nav-link">
              <LinkedinIcon className="icon" />
              LinkedIn
            </Link>
          </nav>
        </div>
        <div className="section">
          <h4>About</h4>
          <nav className="nav">
            <Link to="#" className="nav-link">About Us</Link>
            <Link to="#" className="nav-link">Our Team</Link>
            <Link to="#" className="nav-link">Careers</Link>
            <Link to="#" className="nav-link">Blog</Link>
          </nav>
        </div>
        <div className="section">
          <h4>Support</h4>
          <nav className="nav">
            <Link to="#" className="nav-link">Contact Us</Link>
            <Link to="#" className="nav-link">Help Center</Link>
            <Link to="#" className="nav-link">FAQs</Link>
            <Link to="#" className="nav-link">Accessibility</Link>
          </nav>
        </div>
        <div className="section">
          <h4>Legal</h4>
          <nav className="nav">
            <Link to="#" className="nav-link">Terms of Service</Link>
            <Link to="#" className="nav-link">Privacy Policy</Link>
            <Link to="#" className="nav-link">Cookie Policy</Link>
            
          </nav>
        </div>
        <div className="footer-bottom">
        <p className="signature">Made with love by Ritanshu</p>
      </div>
      </div>
    </footer>
  );
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
