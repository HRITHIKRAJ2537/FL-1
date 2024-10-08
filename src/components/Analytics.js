import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Lightning, Droplet, Thermometer } from 'react-bootstrap-icons'

const energyData = [
  { name: 'Mon', energy: 4000 },
  { name: 'Tue', energy: 3000 },
  { name: 'Wed', energy: 2000 },
  { name: 'Thu', energy: 2780 },
  { name: 'Fri', energy: 1890 },
  { name: 'Sat', energy: 2390 },
  { name: 'Sun', energy: 3490 },
]

export default function Analytics() {
  return (
    <div className="container-fluid px-4">
      <div className="row g-4">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-4">Weekly Energy Consumption</h5>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={energyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="energy" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title mb-4">Energy Consumption</h5>
              <div className="d-flex align-items-center mb-3">
                <Lightning size={24} className="text-warning me-2" />
                <div className="flex-grow-1">
                  <div className="progress" style={{ height: '20px' }}>
                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '70%' }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>70%</div>
                  </div>
                </div>
              </div>
              <p className="card-text">Total energy consumed this month: 250 kWh</p>
            </div>
          </div>
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-4">Device Usage</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Living Room Light
                  <span className="badge bg-primary rounded-pill">8h</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Thermostat
                  <span className="badge bg-primary rounded-pill">24h</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Kitchen Light
                  <span className="badge bg-primary rounded-pill">3h</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-4">Water Usage</h5>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <div>
                  <Droplet size={24} className="text-info me-2" />
                  <span className="fs-4">150 Gallons</span>
                </div>
                <span className="text-muted">This Week</span>
              </div>
              <div className="progress" style={{ height: '20px' }}>
                <div className="progress-bar bg-info" role="progressbar" style={{ width: '60%' }} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>60%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-4">Temperature Trends</h5>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <div>
                  <Thermometer size={24} className="text-danger me-2" />
                  <span className="fs-4">72°F</span>
                </div>
                <span className="text-muted">Average</span>
              </div>
              <div className="progress" style={{ height: '20px' }}>
                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-value
max={100}>75%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}