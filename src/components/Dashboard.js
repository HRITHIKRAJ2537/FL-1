import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Dashboard.css';
import { LightbulbFill, Thermometer, Lock, Unlock, Fan, } from 'react-bootstrap-icons';

export default function Component() {
  const [lightOn, setLightOn] = useState(false);
  const [kitchenLightOn, setKitchenLightOn] = useState(false);
  const [temperature, setTemperature] = useState(21);
  const [doorLocked, setDoorLocked] = useState(true);
  const [fanSpeed, setFanSpeed] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Main content */}
      <div className="flex-grow-1 d-flex flex-column">
        <main className="p-4 flex-grow-1">
          <div className="row g-4">
            <div className="col-sm-6 col-lg-3">
              <div className="card h-100 shadow-sm hover-effect">
                <div className="card-body">
                  <h5 className="card-title">Living Room Light</h5>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <LightbulbFill size={32} className={`${lightOn ? "text-warning" : "text-secondary"} transition-color`} />
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="lightSwitch"
                        checked={lightOn}
                        onChange={() => setLightOn(!lightOn)}
                      />
                      <label className="form-check-label" htmlFor="lightSwitch">
                        {lightOn ? "On" : "Off"}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="card h-100 shadow-sm hover-effect">
                <div className="card-body">
                  <h5 className="card-title">Kitchen Light</h5>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <LightbulbFill size={32} className={`${kitchenLightOn ? "text-warning" : "text-secondary"} transition-color`} />
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="kitchenLightSwitch"
                        checked={kitchenLightOn}
                        onChange={() => setKitchenLightOn(!kitchenLightOn)}
                      />
                      <label className="form-check-label" htmlFor="kitchenLightSwitch">
                        {kitchenLightOn ? "On" : "Off"}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="card h-100 shadow-sm hover-effect">
                <div className="card-body">
                  <h5 className="card-title">Thermostat</h5>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <Thermometer size={32} className="text-danger" />
                    <div>
                      <span className="fs-3 transition-transform">{temperature}°C</span>
                      <div className="btn-group ms-2" role="group">
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                          onClick={() => setTemperature(temp => Math.max(16, temp - 1))}
                        >
                          -
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                          onClick={() => setTemperature(temp => Math.min(30, temp + 1))}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="card h-100 shadow-sm hover-effect">
                <div className="card-body">
                  <h5 className="card-title">Front Door</h5>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    {doorLocked ? 
                      <Lock size={32} className="text-success transition-transform" /> : 
                      <Unlock size={32} className="text-danger transition-transform" />
                    }
                    <button
                      className={`btn ${doorLocked ? "btn-outline-success" : "btn-outline-danger"}`}
                      onClick={() => setDoorLocked(!doorLocked)}
                    >
                      {doorLocked ? "Locked" : "Unlocked"}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="card h-100 shadow-sm hover-effect">
                <div className="card-body">
                  <h5 className="card-title">Ceiling Fan</h5>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <Fan size={32} className={`${fanSpeed > 0 ? "text-primary" : "text-secondary"} ${fanSpeed > 0 ? "spin" : ""}`} style={{animationDuration: `${4 - fanSpeed}s`}} />
                    <div className="w-50">
                      <input
                        type="range"
                        className="form-range"
                        min="0"
                        max="3"
                        step="1"
                        id="fanSpeed"
                        value={fanSpeed}
                        onChange={(e) => setFanSpeed(parseInt(e.target.value))}
                      />
                      <div className="text-center mt-1">Speed: {fanSpeed}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-light p-3 text-center">
          <p className="mb-0">&copy; 2023 Your IoT Company. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
