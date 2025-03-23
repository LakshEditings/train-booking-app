import React, { useState } from 'react';

const TrainTracker = () => {
  const [trainNumber, setTrainNumber] = useState('');
  const [selectedDate, setSelectedDate] = useState('23-Mar-2025');
  const [showTrainDetails, setShowTrainDetails] = useState(false);
  const [lastUpdated, setLastUpdated] = useState('23-Mar-2025 21:34');
  const [isLoading, setIsLoading] = useState(false);
  
  // Sample Data
  const trainData = {
    trainNumber: '20664',
    trainName: 'MYS VANDEBHARAT',
    route: 'PURATCHI THALAIVAR DR. MGR CTL CHENNAI - MYSORE',
    routeCode: 'JN',
    progressPercent: 72,
    delay: 'Average Delay',
    currentStatus: 'Departed from KSR BENGALURU (SBC) on 23-Mar-2025 21:30 (Delay- On Time)',
    upcomingStation: 'KRISHNADEVAPAYA HALT (NDVL)',
    stations: [
      { code: 'SRC', name: 'PURATCHI THALAIVAR DR. MGR CTL', arrivalTime: '', departureTime: '17:00 23-Mar', status: '', distance: 0, delayInfo: 'PT 2A', actualDeparture: '17:01 23-Mar', delayMinutes: '1 Min' },
      { code: 'KPD', name: 'KATPADI JN', arrivalTime: '18:23 23-Mar', departureTime: '18:25 23-Mar', status: '', distance: 136, delayInfo: 'PT 1', actualArrival: '18:38 23-Mar', actualDeparture: '18:41 23-Mar', delayMinutes: '15 Min' },
      { code: 'KJM', name: 'KRISHNARAJAPURAM', arrivalTime: '20:48 23-Mar', departureTime: '20:50 23-Mar', status: '', distance: 348, delayInfo: 'PT 4', actualArrival: '20:59 23-Mar', actualDeparture: '21:01 23-Mar', delayMinutes: '11 Min' },
      { code: 'SBC', name: 'KSR BENGALURU', arrivalTime: '21:25 23-Mar', departureTime: '21:30 23-Mar', status: 'On Time', distance: 360, delayInfo: 'PT 7', actualArrival: '21:19 23-Mar', actualDeparture: '21:30 23-Mar', delayMinutes: '' },
      { code: 'NDVL', name: 'KRISHNADEVAPAYA HALT (NDVL)', arrivalTime: '', departureTime: '', status: 'Upcoming Station', distance: 0, delayInfo: '' },
      { code: 'MYA', name: 'MANDYA', arrivalTime: '22:24 23-Mar', departureTime: '22:35 23-Mar', status: 'On Time', distance: 453, delayInfo: 'PT 2', actualArrival: '', actualDeparture: '', delayMinutes: '' },
      { code: 'MYS', name: 'MYSORE JN', arrivalTime: '23:20 23-Mar', departureTime: 'DSTN', status: 'On Time', distance: 498, delayInfo: 'PT 1', actualArrival: '', actualDeparture: 'DSTN', delayMinutes: '' }
    ]
  };

  const handleTrainNumberChange = (e) => {
    setTrainNumber(e.target.value);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };
            // ONLY 20664 Data Is Given
  const handleSearch = () => {
    if (trainNumber) {
      setIsLoading(true);
      setTimeout(() => {
        setShowTrainDetails(trainNumber === '20664');
        setIsLoading(false);
      }, 800);
    }
  };

  const handleClear = () => {
    setTrainNumber('');
  };

  const handleRefresh = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    setLastUpdated(`23-Mar-2025 ${hours}:${minutes}`);
  };

  return (
    <div className="flex h-screen bg-green-100">
      <div className="w-64 bg-green-600 text-white flex flex-col">
        <div className="p-4 flex flex-col items-center">
          <div className="bg-white p-2 rounded-lg mb-2">
            <img src="/api/placeholder/40/40" alt="NTES Logo" className="w-10 h-10" />
          </div>
          <div className="text-xl font-bold">NTES</div>
          <div className="text-sm">Indian Railways</div>
          <div className="text-xs">National Train Enquiry System</div>
        </div>
        
        <div className="flex-1">
          <div className="py-2 px-4 bg-green-700 flex items-center">
            <span className="mr-2">🔍</span>
            <span>Spot Your Train</span>
          </div>
          <div className="py-2 px-4 hover:bg-green-700 flex items-center">
            <span className="mr-2">🏢</span>
            <span>Live Station</span>
          </div>
          <div className="py-2 px-4 hover:bg-green-700 flex items-center">
            <span className="mr-2">📅</span>
            <span>Train Schedule</span>
          </div>
          <div className="py-2 px-4 hover:bg-green-700 flex items-center">
            <span className="mr-2">🔄</span>
            <span>Trains B/w Stations</span>
          </div>
          <div className="py-2 px-4 hover:bg-green-700 flex items-center">
            <span className="mr-2">⚠️</span>
            <span>Train Exception Info</span>
          </div>
          <div className="py-2 px-4 hover:bg-green-700 flex items-center justify-between">
            <div className="flex items-center">
              <span className="mr-2">ℹ️</span>
              <span>More Info</span>
            </div>
            <span>▼</span>
          </div>
          <div className="py-2 px-4 hover:bg-green-700 flex items-center justify-between">
            <div className="flex items-center">
              <span className="mr-2">🔗</span>
              <span>Useful Links</span>
            </div>
            <span>▼</span>
          </div>
        </div>
        
        <div className="p-4">
          <div className="text-center mb-2">Get Mobile App</div>
          <div className="flex mb-4">
            <button className="flex-1 bg-green-800 py-1 mr-1 rounded flex items-center justify-center">
              <span className="mr-1">▶</span>
              <span>Android</span>
            </button>
            <button className="flex-1 bg-green-800 py-1 ml-1 rounded flex items-center justify-center">
              <span className="mr-1">🍎</span>
              <span>iOS</span>
            </button>
          </div>
          <div className="py-2 hover:bg-green-700 flex items-center">
            <span className="mr-2">📝</span>
            <span>Complaints</span>
          </div>
          <div className="py-2 hover:bg-green-700 flex items-center justify-between">
            <div className="flex items-center">
              <span className="mr-2">🌐</span>
              <span>Language: English</span>
            </div>
            <span>▼</span>
          </div>
          <div className="py-2 hover:bg-green-700 flex items-center">
            <span className="mr-2">📋</span>
            <span>Disclaimer</span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="bg-white p-4 flex items-center shadow-md">
          <div className="text-green-700 mr-2">📋</div>
          <div className="text-xl text-gray-800">National Train Enquiry System</div>
          <div className="ml-auto">
            <img src="/api/placeholder/30/30" alt="Indian Railways Logo" className="w-8 h-8" />
          </div>
        </div>

\        <div className="flex-1 overflow-auto">
          <div className="bg-green-600 text-white p-4 text-lg">
            Spot Your Train
          </div>

          <div className="flex border-b">
            <button className="px-4 py-2 bg-green-600 text-white flex items-center">
              Train Instances
              <span className="ml-2 bg-red-500 text-white text-xs px-1 rounded">NEW</span>
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 border-r border-l">
              Journey Station Basis
            </button>
          </div>

          <div className="p-4 border-b">
            <div className="mb-2 text-gray-700">Train No./Name</div>
            <div className="flex items-center">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={trainNumber}
                  onChange={handleTrainNumberChange}
                  className="w-full p-2 border rounded"
                  placeholder="Enter Train No. or Name (e.g. 20664)"
                />
                {trainNumber && (
                  <button
                    onClick={handleClear}
                    className="absolute right-10 top-2 text-gray-500"
                  >
                    ✕
                  </button>
                )}
                <button
                  onClick={handleSearch}
                  className="absolute right-2 top-2 text-gray-500"
                >
                  🔍
                </button>
              </div>
            </div>
          </div>

          {isLoading && (
            <div className="flex justify-center items-center p-20">
              <div className="text-green-600 text-lg">Loading train information...</div>
            </div>
          )}

          {showTrainDetails && !isLoading && (
            <div>
              <div className="bg-green-600 text-white p-3 text-lg">
                {trainData.trainNumber} {trainData.trainName}
              </div>

              <div className="p-4 border-b flex items-center">
                <span className="mr-4">Start Date :</span>
                <button 
                  onClick={() => handleDateSelect('24-Mar-2025')}
                  className={`border px-4 py-1 mr-2 ${selectedDate === '24-Mar-2025' ? 'bg-green-600 text-white' : 'bg-white'}`}
                >
                  24-Mar-2025
                </button>
                <button 
                  onClick={() => handleDateSelect('23-Mar-2025')}
                  className={`border px-4 py-1 mr-2 ${selectedDate === '23-Mar-2025' ? 'bg-green-600 text-white' : 'bg-white'}`}
                >
                  23-Mar-2025
                </button>
                <button 
                  onClick={() => handleDateSelect('22-Mar-2025')}
                  className={`border px-4 py-1 ${selectedDate === '22-Mar-2025' ? 'bg-green-600 text-white' : 'bg-white'}`}
                >
                  22-Mar-2025
                </button>
              </div>

              <div className="p-2 border-b flex justify-between items-center">
                <div>
                  <span>Start Date : {selectedDate}</span>
                  <span className="ml-2 bg-green-500 text-white px-2 rounded-md text-sm">🚩 Current Position</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">Last Updates On</span>
                  <span>{lastUpdated}</span>
                  <button onClick={handleRefresh} className="ml-2 bg-green-100 rounded-full p-1">
                    🔄
                  </button>
                </div>
              </div>

              <div className="px-4 py-2 border-b">
                <div className="text-green-600 text-sm">
                  {trainData.currentStatus}
                </div>
              </div>

              <div className="px-4 py-2 flex items-center">
                <div className="bg-green-500 w-4 h-4 rounded-full mr-1 flex items-center justify-center">
                  <div className="bg-white w-1 h-1 rounded-full"></div>
                </div>
                <div className="flex-1 bg-gray-200 h-2 mx-1 relative">
                  <div style={{ width: `${trainData.progressPercent}%` }} className="h-full bg-green-500"></div>
                  <div className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-green-500 flex items-center justify-center">
                    <div className="bg-green-500 w-1 h-1 rounded-full"></div>
                  </div>
                </div>
                <div className="bg-red-500 w-4 h-4 rounded-full ml-1"></div>
              </div>

              <div className="bg-green-600 text-white p-4 flex justify-between">
                <button className="bg-white text-green-800 px-3 py-1 rounded text-sm">
                  Show on Bhuvan Map
                </button>
                <div className="text-center">
                  <div>{trainData.route}</div>
                  <div>{trainData.routeCode}</div>
                  <div className="bg-green-200 text-red-500 px-4 py-1 rounded mt-1 text-sm">{trainData.delay}</div>
                </div>
                <button className="text-white px-3 py-1">
                  📅
                </button>
              </div>

              <div className="grid grid-cols-8 bg-gray-100 text-sm border-b py-2">
                <div className="col-span-1 text-center">Arrival</div>
                <div className="col-span-5 text-left pl-8">Station</div>
                <div className="col-span-2 text-center">Departure</div>
              </div>

              <div className="overflow-y-auto max-h-96">
                {trainData.stations.map((station, index) => (
                  <div key={index} className="border-b">
                    <div className="grid grid-cols-8 items-center py-2 text-sm">
                      <div className="col-span-1 text-right pr-2">
                        {station.actualArrival && (
                          <div className="text-red-500">{station.actualArrival}</div>
                        )}
                        {station.arrivalTime && !station.actualArrival && (
                          <div>{station.arrivalTime}</div>
                        )}
                      </div>

                      <div className="col-span-1 relative flex justify-center">
                        <div className="h-full w-0.5 bg-gray-300 absolute"></div>
                        <div className={`z-10 w-5 h-5 rounded-full ${index <= 3 ? 'bg-green-500' : index === 4 ? 'bg-yellow-500' : 'bg-gray-400'} flex items-center justify-center text-white`}>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                        </div>
                      </div>

                      <div className="col-span-4">
                        <div className="flex items-center">
                          <div className="mr-2 text-gray-500">{station.code}</div>
                          <div>{station.name}</div>
                        </div>
                        {station.delayInfo && (
                          <div className="inline-block bg-orange-500 text-white px-1 text-xs rounded">
                            {station.delayInfo}
                          </div>
                        )}
                        {station.distance > 0 && (
                          <div className="text-xs text-gray-500 mt-1">{station.distance} KMs</div>
                        )}
                        {station.status && (
                          <div className={`inline-block px-1 text-xs rounded mt-1 ${station.status === 'On Time' ? 'bg-green-200 text-green-800' : station.status === 'Upcoming Station' ? 'bg-yellow-200 text-yellow-800' : 'bg-gray-200 text-gray-800'}`}>
                            {station.status}
                          </div>
                        )}
                      </div>

                      <div className="col-span-2 text-right pr-4">
                        {station.actualDeparture && (
                          <div className="text-red-500">{station.actualDeparture}</div>
                        )}
                        {station.departureTime && !station.actualDeparture && (
                          <div>{station.departureTime}</div>
                        )}
                        {station.delayMinutes && (
                          <div className="inline-block bg-red-100 text-red-800 px-1 text-xs rounded">
                            {station.delayMinutes}
                          </div>
                        )}
                      </div>
                    </div>

                    {index === 3 && (
                      <div className="bg-gray-200 p-2 text-sm">
                        <div className="flex">
                          <div className="w-16 text-xs pt-1">Updated on</div>
                          <div className="flex-1 flex flex-col">
                            <div>Departed from KSR BENGALURU (SBC) on 23-Mar-2025 21:30 (Delay- On Time)</div>
                            <div className="text-gray-600 bg-gray-300 mt-1 p-1">Upcoming Station</div>
                            <div className="p-1">{trainData.upcomingStation}</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="ad-banner">
            <span>Advertisement</span>
          </div>
            </div>
          )}

          {!showTrainDetails && !isLoading && (
            <div className="p-8 text-center text-gray-500">
              Enter a train number and click the search icon to see train details.
              <div className="mt-4 text-gray-700">Tip: Try searching for "20664" to view the Mysore Vandebharat Express</div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-white p-2 text-xs text-gray-500 flex justify-between border-t">
          <div>23-Mar-2025 21:36</div>
          <div className="flex space-x-2">
            <span>f</span>
            <span>t</span>
            <span>▶</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainTracker;