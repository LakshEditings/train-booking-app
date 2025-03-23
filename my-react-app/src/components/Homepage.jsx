import React, { useState } from "react";
import "./Homepage.css";
import Menubar from "./Menubar";
import "./PopupLogin.css"
import { useNavigate } from "react-router-dom"; 


const Homepage = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [classType, setClassType] = useState("All Classes");
  const [quota, setQuota] = useState("General");

  const [options, setOptions] = useState({
    disability: false,
    flexibleDate: false,
    availableBerth: false,
    railwayPass: false,
  });

  const services = [
    { name: "FLIGHTS", icon: "✈️" },
    { name: "HOTELS", icon: "🏨" },
    { name: "RAIL DRISHTI", icon: "📈" },
    { name: "E-CATERING", icon: "🍽️" },
    { name: "BUS", icon: "🚌" },
    { name: "HOLIDAY PACKAGES", icon: "🏖️" },
    { name: "TOURIST TRAIN", icon: "🚆" },
    { name: "HILL RAILWAYS", icon: "⛰️" },
    { name: "CHARTER TRAIN", icon: "🚉" },
    { name: "GALLERY", icon: "🖼️" },
  ];

  const holidays = [
    {
      title: "Maharajas' Express",
      image: "https://www.irctc.co.in/nget/assets/images/exterior.jpg",
      description:
        "Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an “Experience Unsurpassed”. It has been a winner of “World’s Leading Luxury train” by World Travel Awards consecutively for last six years.",
      link: "#"
    },
    {
      title: "International Packages",
      image: "https://www.irctc.co.in/nget/assets/images/Thailand.jpg",
      description:
        "Best deals in International Holiday packages, handpicked by IRCTC, for Thailand, Dubai, Sri Lanka, Hong Kong, China, Macau, Bhutan, Nepal, U.K., Europe, USA, Australia etc. The packages are inclusive of sightseeing, meals, visa charges and overseas medical insurance to give you a hassle-free and memorable experience.",
      link: "#"
    },
    {
      title: "Domestic Air Packages",
      image: "https://www.irctc.co.in/nget/assets/images/Kashmir.jpg",
      description:
        "Be it the spiritual devotee seeking blessings of Tirupati, Shirdi or Mata Vaishno Devi or the leisure traveller wanting to relish the Blue mountains of North East, Sand-dunes of Rajasthan, Hamlets of Ladakh, Wonders of Himalayas, Serene lakes or Picturesque Islands, IRCTC has it all. Discover India through IRCTC!",
      link: "#"
    },
    {
      title: "Bharat Gaurav Tourist Train",
      image: "https://www.irctc.co.in/nget/assets/images/Bharat_Gaurav.jpg",
      description:
        "IRCTC operates Bharat Gaurav Tourist Train having AC III-Tier accommodation on train specially designed to promote domestic tourism in India. This train runs on various theme based circuits covering pilgrimage and heritage destinations in its itinerary on a 5 days to 20 days trip and showcase India’s rich cultural heritage.",
      link: "#"
    },
    {
      title: "Rail Tour Packages",
      image: "https://www.irctc.co.in/nget/assets/images/Manali.jpg",
      description:
        "IRCTC offers Exclusive Rail tour packages with confirmed train tickets, sight-seeing and meals for enchanting Nilgiri Mountains, Darjeeling, Kullu Manali, Kashmir, Gangtok or divine tours of Mata Vaishno Devi, Rameswaram, Madurai, Shirdi, Tirupati etc. Holiday packages/ Land packages to these destinations are also available.",
      link: "#"
    }
  ];

  const navigate = useNavigate(); 

  const isSearchDisabled = !from.trim() || !to.trim() || !date;
  
  const handleSearch = () => {
    if (isSearchDisabled) {
      alert("Please fill all required fields!"); 
      return;
    }
    navigate("/booking"); 
  };
  

  return (
    <div className="main-container">
      <div className="menubar-container">
        <Menubar />
      </div>

      <div className="homepage-container">
        <div className="content-wrapper">
          <div className="booking-container">
            <div className="top-buttons">
              <button className="top-btn">
                <img 
                  src="https://cdn.creazilla.com/cliparts/26240/clipboard-check-clipart-md.png" 
                  alt="PNR Status Icon" 
                  className="icon" 
                  style={{ height: "100%", width: "16px" }}
                />
                PNR STATUS
              </button>
              <button className="top-btn">
                <img 
                  src="https://clipart-library.com/2023/office-notes-vector-clipart.png" 
                  alt="Charts Vacancy Icon" 
                  className="icon" 
                  style={{ height: "100%", width: "16px" }}
                />
                CHARTS/VACANCY
              </button>
            </div>

            <h2 className="center-title">BOOK TICKET</h2>

            <div className="booking-form">
              <div className="form-row input-container">
                <input
                  type="text"
                  placeholder="From"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="input-field"
                  style={{ background: "white", color: "#2f4676", marginBottom: "10px" }}
                />
                <input
                  type="text"
                  placeholder="To"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="input-field"
                  style={{ background: "white", color: "#2f4676", marginBottom: "10px" }}
                />
              </div>
              
              <div className="form-row input-container">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="input-field"
                  style={{ background: "white", color: "#2f4676", marginBottom: "10px" }}
                />
                <select 
                  value={classType} 
                  onChange={(e) => setClassType(e.target.value)} 
                  className="input-field"
                  style={{ background: "white", color: "#2f4676", marginBottom: "10px" }}
                >
                  <option value="All Classes">All Classes</option>
                  <option value="General">General</option>
                  <option value="Sleeper">Sleeper</option>
                  <option value="AC">AC</option>
                </select>
              </div>

              <div className="form-row input-container">
                <select 
                  value={quota} 
                  onChange={(e) => setQuota(e.target.value)} 
                  className="input-field"
                  style={{ background: "white", color: "#2f4676", marginBottom: "10px" }}
                >
                  <option value="General">General</option>
                  <option value="Tatkal">Tatkal</option>
                  <option value="Premium Tatkal">Premium Tatkal</option>
                </select>
              </div>
            </div>

            <div className="options-container">
              <div className="checkbox-grid">
                <label>
                  <input
                    type="checkbox"
                    checked={options.disability}
                    onChange={() =>
                      setOptions((prev) => ({ ...prev, disability: !prev.disability }))
                    }style={{ width: "20px", height: "20px", accentColor: "#213d77", border: "2px solid #001f4d" }}
                  />
                  Person With Disability Concession
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={options.flexibleDate}
                    onChange={() =>
                      setOptions((prev) => ({ ...prev, flexibleDate: !prev.flexibleDate }))
                    }style={{ width: "20px", height: "20px", accentColor: "#213d77", border: "2px solid #001f4d" }}
                  />
                  Flexible With Date
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={options.availableBerth}
                    onChange={() =>
                      setOptions((prev) => ({ ...prev, availableBerth: !prev.availableBerth }))
                    }style={{ width: "20px", height: "20px", accentColor: "#213d77", border: "2px solid #001f4d" }}
                  />
                  Train with Available Berth
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={options.railwayPass}
                    onChange={() =>
                      setOptions((prev) => ({ ...prev, railwayPass: !prev.railwayPass }))
                    }style={{ width: "20px", height: "20px", accentColor: "#213d77", border: "2px solid #001f4d" }}
                  />
                  Railway Pass Concession
                </label>
              </div>
            </div>

            <div className="form-row bottom-buttons">
              <button 
                className="search-btn" 
                onClick={handleSearch} 
                disabled={isSearchDisabled}
                style={{ opacity: isSearchDisabled ? 0.5 : 1 }}
              >
                SEARCH
              </button>
              <button className="easy-booking-btn">EASY BOOKING</button>
            </div>
          </div>
 
          <div className="info-container">
        <p style={{ color: "#0000ff" }}>
          <strong>Customers can use enhanced interface for their IRCTC related queries!!</strong>{" "}
          <a href="https://equery.irctc.co.in" target="_blank" rel="noopener noreferrer" style={{ color: "#116fbf" }}>
            https://equery.irctc.co.in
          </a>
        </p>
        <p style={{ color: "#ff0000" }}>
          <strong>Customer Care Numbers :</strong> 14646 / 08044647999 / 08035734999
        </p>
        <p style={{ color: "#116fbf" }}>
          <strong>BEWARE OF FRAUDSTERS:</strong> Always download official IRCTC Rail Connect App
          from the Google Play Store or Apple App Store only.
        </p>
      </div>

        </div>
      </div>
      
      <div className="service-container">
        <h2>Have you not found the right one?</h2>
        <p>Find a service suitable for you here.</p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-icon">{service.icon}</div>
            <p>{service.name}</p>
          </div>
        ))}
      </div>
     </div>
      
     <div className="holiday-container">
      <h2>HOLIDAYS</h2>
      <div className="holiday-grid">
        {holidays.map((holiday, index) => (
          <div key={index} className="holiday-card">
            <img src={holiday.image} alt={holiday.title} />
            <h3>{holiday.title}</h3>
            <p>{holiday.description}</p>
            <a href={holiday.link} className="read-more">Read More →</a>
          </div>
        ))}
      </div>
    </div>
    
    </div>
  );
};

export default Homepage;