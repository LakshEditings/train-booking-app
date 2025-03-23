import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const footerSections = [
    {
      title: "IRCTC Trains",
      links: ["Reservation Enquiries", "PNR Enquiry", "Train Enquiry", "Train/Fare Accommodation", "Railway Enquiry-139"],
    },
    {
      title: "General Information",
      links: ["IRCTC Official App", "SMS Booking", "IRCTC Mobile Website", "App Guidelines", "Mobile Booking FAQs"],
    },
    {
      title: "Important Information",
      links: ["Salient Features", "Ticket Cancellation Rules", "Foreign Tourist T&C", "Group Booking T&C", "Travel Insurance Claim Process"],
    },
    {
      title: "Agents",
      links: ["IRCTC Overview", "Management Team", "IRCTC Milestones", "IRCTC Achievements", "IRCTC Services"],
    },
    {
      title: "Enquiries",
      links: ["More info", "FAQs", "Terms & Conditions", "Travel Insurance T&C", "FTR T&C"],
    },
    {
      title: "How To",
      links: ["Avail Loyalty Benefits", "IRCTC-iPAY Payment Gateway", "IRCTC Zone", "DMRC Ticket Booking at IRCTC", "Wallet Refund Status"],
    },
    {
      title: "IRCTC Official App",
      links: ["Mobile Zone", "Policies", "Ask Disha ChatBot", "About us", "Feedback"],
    },
    {
      title: "Advertise with us",
      links: ["Loyalty Program", "Special Discounts", "Corporate Booking", "IRCTC News", "IRCTC Events"],
    },
    {
      title: "Refund Rules",
      links: ["Tatkal Ticket Booking", "IRCTC Login Issues", "Payment Failure Assistance", "Booking Cancellation", "IRCTC Wallet Recharge"],
    },
    {
      title: "Person With Disability Facilities",
      links: ["Bank Transaction Charges", "Women Sr. Citizen Concession", "VIKALP Scheme", "Travel Insurance (Incl. of GST)", "Browser Settings"],
    },
    {
      title: "IRCTC eWallet",
      links: ["IRCTC Marketing Statistics", "Banner-Advertisement", "Advertisement Terms & Conditions", "Push Notification"],
    },
    {
      title: "For Newly Migrated Agents",
      links: ["Ticket Cancellation & Refund Rules", "Gazette: Cancellation of Ticket and Refund Rules 2015", "Refund Rule of Suvidha Train"],
    },
    {
      title: "Mobile Zone",
      links: ["Facilities for Person With Disability Users", "Facilities for Visually Impaired Users", "User Guide: Person With Disability Booking"],
    },
    {
      title: "Policies",
      links: ["E-Catering", "Onboard Catering", "Catering Guidelines", "Service Feedback", "Food Quality Complaints"],
    },
    {
      title: "Ask Disha ChatBot",
      links: ["Customer Care", "IRCTC Helpline Numbers", "Technical Support", "Complaint Registration", "FAQs"],
    },
    {
      title: "About us",
      links: ["Register", "Book E-ticket", "Book Tatkal Ticket", "Cancel E-ticket", "Change Boarding Point"],
    },
    {
      title: "Help & Support",
      links: ["General Queries", "Booking Related Queries", "Cancellation & Refund Queries", "Technical Support", "Contact Us"],
    },
    {
      title: "Booking Support",
      links: ["IRCTC Privacy Policy", "IRCTC Security Policy", "IRCTC Terms of Use", "Website Policies", "Payment Gateway Policies"],
    },
    {
      title: "Catering Services",
      links: ["Special Trains", "Tourism Offers", "Holiday Packages", "Rail Tour Packages", "International Tour Packages"],
    },
    {
      title: "Tourism",
      links: ["IRCTC Marketing Statistics", "Banner-Advertisement", "Advertisement Terms & Conditions", "Push Notification"],
    },
    {
      title: "Special Services",
      links: ["Facilities for Person With Disability Users", "Facilities for Visually Impaired Users", "User Guide: Person With Disability Booking"],
    },
  ];

  return (
    <footer className="footer">
      <div className="social-media">
        <p className="text-lg font-semibold">Get Connected with us on social networks</p>
        <div className="social-icons">
          {[
            { name: "whatsapp", url: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" },
            { name: "youtube", url: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" },
            { name: "instagram", url: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" },
            { name: "linkedin", url: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" },
            { name: "telegram", url: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" },
            { name: "pinterest", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" },
            { name: "tumblr", url: "https://upload.wikimedia.org/wikipedia/commons/7/79/Tumblr_logoset.png" },
            { name: "kooapp", url: "https://www.kooapp.com/img/koo-logo.png" },
            { name: "twitter", url: "https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg" },
          ].map((icon, index) => (
            <span key={index} className="social-circle">
              <img src={icon.url} alt={icon.name} className="social-img" />
            </span>
          ))}
        </div>
      </div>
  
      <div className="empty-space"></div>
  
      <div className="footer-links">
        {footerSections.map((section, index) => (
          <div key={index} className="footer-column">
            <button className="footer-heading" onClick={() => toggleSection(index)}>
              {section.title}
              <span className={`dropdown-arrow ${openSections[index] ? "open" : ""}`}>▼</span>
            </button>
            <ul className={`footer-list ${openSections[index] ? "show" : ""}`}>
              {section.links.map((link, idx) => (
                <li key={idx} className="footer-item">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
  
      <div className="footer-bottom">
        <div className="payment-icons">
          {[
            { name: "verisign", url: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Verisign-logo.svg" },
            { name: "mastercard", url: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" },
            { name: "safekey", url: "https://upload.wikimedia.org/wikipedia/en/8/8d/American_Express_SafeKey_logo.svg" },
            { name: "visa", url: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.svg" },
            { name: "rupay", url: "https://upload.wikimedia.org/wikipedia/commons/c/cd/RuPay.svg" },
            { name: "irctc", url: "https://upload.wikimedia.org/wikipedia/commons/4/49/IRCTC_Logo.svg" },
            { name: "cris", url: "https://upload.wikimedia.org/wikipedia/en/3/3b/Centre_for_Railway_Information_Systems_logo.png" },
          ].map((icon, index) => (
            <div key={index} className="payment-circle">
              <img src={icon.url} alt={icon.name} />
            </div>
          ))}
        </div>
        <div className="copyright">
          <p>Copyright &copy; 2025 - www.irctc.co.in. All Rights Reserved</p>
          <p>Designed and Hosted by <span className="cris">CRIS</span></p>
        </div>
        <p className="browsers">Compatible Browsers</p>
      </div>
    </footer>
  );
  
  
};

export default Footer;
