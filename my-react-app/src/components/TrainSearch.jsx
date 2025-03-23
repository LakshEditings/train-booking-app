import React, { useState } from 'react';
import { RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';
import "./TrainSearch.css";
import Menubar from './Menubar';

const TrainSearch = () => {
  const [selectedDate, setSelectedDate] = useState('23/03/2025');
  
  return (
    <div className="train-booking-container">
      <div className="menubar-container">
        <Menubar />
      </div>
        
      <div className="search-header">
        <div className="search-inputs">
          <div className="station-input">
            <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </span>
            <span className="station-name">CHENNAI BEACH - MSB CHENNAI</span>
            <button className="swap-button">=</button>
          </div>
          
          <div className="station-input">
            <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </span>
            <span className="station-name">KSR BENGALURU - SBC</span>
          </div>
          
          <div className="date-input">
            <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </span>
            <span className="date">{selectedDate}</span>
          </div>
          
          <div className="select-container">
            <select className="class-select">
              <option>All Classes</option>
            </select>
          </div>
          
          <div className="select-container">
            <select className="quota-select">
              <option>GENERAL</option>
            </select>
          </div>
          
          <button className="modify-search-btn">
            Modify Search
          </button>
        </div>
        
        <div className="filter-options">
          <div className="filter-option">
            <input type="checkbox" id="flexible-date" />
            <label htmlFor="flexible-date">Flexible With Date</label>
          </div>
          
          <div className="filter-option">
            <input type="checkbox" id="available-berth" />
            <label htmlFor="available-berth">Train with Available Berth</label>
          </div>
          
          <div className="filter-option">
            <input type="checkbox" id="disability" />
            <label htmlFor="disability">Person With Disability Concession</label>
          </div>
          
          <div className="filter-option">
            <input type="checkbox" id="railway-pass" />
            <label htmlFor="railway-pass">Railway Pass Concession</label>
          </div>
        </div>
      </div>
      
      <div className="main-content">
        <div className="sidebar">
          <div className="sidebar-header">
            <h3>Refine Results</h3>
            <button className="reset-btn">Reset Filters</button>
          </div>
          
            <div className="filter-section">
            <div className="filter-header">
                <h4>JOURNEY CLASS</h4>
                <div className="select-all">
                <span>Select All</span>
                <span className="chevron">^</span>
                </div>
            </div>
            
            <div className="filter-options-grid">
                <div className="filter-option">
                <input type="checkbox" id="1a" checked />
                <label htmlFor="1a">AC First Class (1A)</label>
                </div>
                <div className="filter-option">
                <input type="checkbox" id="2a" checked />
                <label htmlFor="2a">AC 2 Tier (2A)</label>
                </div>
                <div className="filter-option">
                <input type="checkbox" id="2s" checked />
                <label htmlFor="2s">Second Sitting (2S)</label>
                </div>
                <div className="filter-option">
                <input type="checkbox" id="3a" checked />
                <label htmlFor="3a">AC 3 Tier (3A)</label>
                </div>
                <div className="filter-option">
                <input type="checkbox" id="3e" checked />
                <label htmlFor="3e">AC 3 Economy (3E)</label>
                </div>
                <div className="filter-option">
                <input type="checkbox" id="cc" checked />
                <label htmlFor="cc">AC Chair car (CC)</label>
                </div>
                <div className="filter-option">
                <input type="checkbox" id="ea" checked />
                <label htmlFor="ea">Anubhuti Class (EA)</label>
                </div>
                <div className="filter-option">
                <input type="checkbox" id="ec" checked />
                <label htmlFor="ec">Exec. Chair Car (EC)</label>
                </div>
                <div className="filter-option">
                <input type="checkbox" id="sl" checked />
                <label htmlFor="sl">Sleeper (SL)</label>
                </div>
            </div>
            </div>

            <div className="filter-section">
            <div className="filter-header">
                <h4>TRAIN TYPE</h4>
                <div className="select-all">
                <span>Select All</span>
                <span className="chevron">^</span>
                </div>
            </div>
            
            <div className="filter-options-grid">
                <div className="filter-option">
                <input type="checkbox" id="other1" checked />
                <label htmlFor="other1">OTHER</label>
                </div>
                <div className="filter-option">
                <input type="checkbox" id="shatabdi" checked />
                <label htmlFor="shatabdi">
                    <span className="color-indicator blue"></span>
                    SHATABDI
                </label>
                </div>
                <div className="filter-option">
                <input type="checkbox" id="special" checked />
                <label htmlFor="special">
                    <span className="color-indicator red"></span>
                    SPECIAL
                </label>
                </div>
                <div className="filter-option">
                <input type="checkbox" id="other2" checked />
                <label htmlFor="other2">OTHER</label>
                </div>
            </div>
            </div>
          
          <div className="filter-section">
            <div className="filter-header">
              <h4>DEPARTURE TIME</h4>
              <div className="select-all">
                <span>Select All</span>
                <span>^</span>
              </div>
            </div>
            
            <div className="time-grid">
              <div className="time-block">
                <div>00:00 - 06:00</div>
                <div>Early Morning</div>
              </div>
              <div className="time-block">
                <div>06:00 - 12:00</div>
                <div>Morning</div>
              </div>
              <div className="time-block">
                <div>12:00 - 18:00</div>
                <div>Mid Day</div>
              </div>
              <div className="time-block">
                <div>18:00 - 24:00</div>
                <div>Night</div>
              </div>
            </div>
            <div className="time-slider">
              <span>00:00 Hrs</span>
              <div className="slider-track">
                <div className="slider-thumb"></div>
              </div>
              <span>24:00 Hrs</span>
            </div>
          </div>
          
          <div className="filter-section">
            <div className="filter-header">
              <h4>ARRIVAL TIME</h4>
              <div className="select-all">
                <span>Select All</span>
                <span>^</span>
              </div>
            </div>
            
            <div className="time-grid">
              <div className="time-block">
                <div>00:00 - 06:00</div>
                <div>Early Morning</div>
              </div>
              <div className="time-block">
                <div>06:00 - 12:00</div>
                <div>Morning</div>
              </div>
              <div className="time-block">
                <div>12:00 - 18:00</div>
                <div>Mid Day</div>
              </div>
              <div className="time-block">
                <div>18:00 - 24:00</div>
                <div>Night</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="content">
          <div className="results-header">
            <div className="results-info">
              <span className="bold">14 Results for </span>
              <span className="bold">CHENNAI BEACH ➜ KSR BENGALURU | Sun, 23 Mar 2025 </span>
              <span>For Quota | General</span>
            </div>
            <div className="nav-buttons">
              <button className="day-nav prev-day">
                <ChevronLeft size={16} />
                Previous Day
              </button>
              <button className="day-nav next-day">
                Next Day
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
          <div className="sort-options">
            <button className="sort-button">Sort By | Duration</button>
            <button className="sort-button">Show Available Trains</button>
          </div>
          
          <div className="ad-banner">
            <span>Advertisement</span>
          </div>
          
                {/* Train 1 */}
            <div className="train-card">
            <div className="train-header" style={{
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                backgroundColor: '#f5f5f5', 
                padding: '8px 12px',
                borderRadius: '4px 4px 0 0'
            }}>
                <div className="train-name">MYS VANDEBHARAT (20607)</div>
                <div className="runs-info">
                <span>Runs On: M T W T F S S</span>
                <span className="schedule-link" style={{color: '#1976d2', marginLeft: '12px'}}>Train Schedule</span>
                </div>
            </div>
            
            <div className="journey-details">
                <div className="departure">
                <div className="time">05:50 |</div>
                <div>MGR CHENNAI CTL | Sun, 23 Mar</div>
                </div>
                
                <div className="duration">
                <div className="duration-line">
                    <div className="duration-text">04:10</div>
                </div>
                </div>
                
                <div className="arrival">
                <div className="time">10:00 |</div>
                <div>KSR BENGALURU | Sun, 23 Mar</div>
                </div>
            </div>
            
            <div className="availability">
                <div className="class-availability">
                <div>AC Chair car (CC)</div>
                <button className="refresh-btn">
                    Refresh <RefreshCw size={14} />
                </button>
                </div>
                
                <div className="class-availability">
                <div>Exec. Chair Car (EC)</div>
                <button className="refresh-btn">
                    Refresh <RefreshCw size={14} />
                </button>
                </div>
            </div>
            
            <div className="boarding-info">
                Please check <a href="#">NTES website</a> or <a href="#">NTES app</a> for actual time before boarding
            </div>
            
            <div className="booking-actions">
                <button className="book-now-btn">Book Now</button>
                <button className="other-dates-btn">OTHER DATES</button>
            </div>
            </div>

            {/* Train 2 */}
            <div className="train-card">
            <div className="train-header" style={{
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                backgroundColor: '#f5f5f5', 
                padding: '8px 12px',
                borderRadius: '4px 4px 0 0'
            }}>
                <div className="train-name">MYS VANDEBHARAT (20664)</div>
                <div className="runs-info">
                <span>Runs On: M T W T F S S</span>
                <span className="schedule-link" style={{color: '#1976d2', marginLeft: '12px'}}>Train Schedule</span>
                </div>
            </div>
            
            <div className="journey-details">
                <div className="departure">
                <div className="time">17:00 |</div>
                <div>MGR CHENNAI CTL | Sun, 23 Mar</div>
                </div>
                
                <div className="duration">
                <div className="duration-line">
                    <div className="duration-text">04:25</div>
                </div>
                </div>
                
                <div className="arrival">
                <div className="time">21:25 |</div>
                <div>KSR BENGALURU | Sun, 23 Mar</div>
                </div>
            </div>
            
            <div className="availability">
                <div className="class-availability">
                <div>AC Chair car (CC)</div>
                <button className="refresh-btn">
                    Refresh <RefreshCw size={14} />
                </button>
                </div>
                
                <div className="class-availability">
                <div>Exec. Chair Car (EC)</div>
                <button className="refresh-btn">
                    Refresh <RefreshCw size={14} />
                </button>
                </div>
            </div>
            
            <div className="boarding-info">
                Please check <a href="#">NTES website</a> or <a href="#">NTES app</a> for actual time before boarding
            </div>
            
            <div className="booking-actions">
                <button className="book-now-btn">Book Now</button>
                <button className="other-dates-btn">OTHER DATES</button>
            </div>
            </div>

        {/* Train 3  */}
                <div className="train-card">
        <div className="train-header" style={{
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            backgroundColor: '#f5f5f5', 
            padding: '8px 12px',
            borderRadius: '4px 4px 0 0'
        }}>
            <div className="train-name">MYS SHATABDI (12007)</div>
            <div className="runs-info">
            <span>Runs On: M T W T F S S</span>
            <span className="schedule-link" style={{color: '#1976d2', marginLeft: '12px'}}>Train Schedule</span>
            </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default TrainSearch;