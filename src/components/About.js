import React from 'react'
import { Building, EnvelopeAt, Telephone, Globe } from 'react-bootstrap-icons'

export default function About() {
  return (
    <div className="container-fluid px-4">
      <div className="row g-4">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-4">Welcome to our IoT Dashboard</h5>
              <p className="card-text">Our IoT Dashboard is your central hub for managing all your smart home devices. With real-time monitoring and easy controls, you can effortlessly manage your connected home from anywhere.</p>
              <p className="card-text">Version: 1.0.0</p>
              <p className="card-text">Developed by: Your Company Name</p>
              <h6 className="mt-4 mb-3">Key Features:</h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Real-time device monitoring</li>
                <li className="list-group-item">Easy device control</li>
                <li className="list-group-item">Energy usage tracking</li>
                <li className="list-group-item">Customizable settings</li>
                <li className="list-group-item">Secure and reliable</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-4">Contact Information</h5>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <Building className="me-2" />
                  Your Company Name<br />
                  123 IoT Street<br />
                  Tech City, TC 12345
                </li>
                <li className="mb-3">
                  <EnvelopeAt className="me-2" />
                  support@yourcompany.com
                </li>
                <li className="mb-3">
                  <Telephone className="me-2" />
                  +1 (555) 123-4567
                </li>
                <li>
                  <Globe className="me-2" />
                  www.yourcompany.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}