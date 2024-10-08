import React from 'react'
import { Person, EnvelopeAt, Key, Bell, Wifi, CloudArrowUp, ShieldLock } from 'react-bootstrap-icons'

export default function Settings() {
  return (
    <div className="container-fluid px-4">
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-4">User Profile</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    <Person className="me-2" />Username
                  </label>
                  <input type="text" className="form-control" id="username" placeholder="Enter username" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    <EnvelopeAt className="me-2" />Email address
                  </label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    <Key className="me-2" />Password
                  </label>
                  <input type="password" className="form-control" id="password" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary">Update Profile</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title mb-4">Notifications</h5>
              <div className="form-check form-switch mb-3">
                <input className="form-check-input" type="checkbox" id="pushNotifications" />
                <label className="form-check-label" htmlFor="pushNotifications">
                  <Bell className="me-2" />Push Notifications
                </label>
              </div>
              <div className="form-check form-switch mb-3">
                <input className="form-check-input" type="checkbox" id="emailNotifications" />
                <label className="form-check-label" htmlFor="emailNotifications">
                  <EnvelopeAt className="me-2" />Email Notifications
                </label>
              </div>
            </div>
          </div>
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-4">System Settings</h5>
              <div className="mb-3">
                <label htmlFor="wifiNetwork" className="form-label">
                  <Wifi className="me-2" />Wi-Fi Network
                </label>
                <select className="form-select" id="wifiNetwork">
                  <option>Home Network</option>
                  <option>Office Network</option>
                  <option>Guest Network</option>
                </select>
              </div>
              <div className="form-check form-switch mb-3">
                <input className="form-check-input" type="checkbox" id="cloudSync" />
                <label className="form-check-label" htmlFor="cloudSync">
                  <CloudArrowUp className="me-2" />Cloud Sync
                </label>
              </div>
              <div className="form-check form-switch mb-3">
                <input className="form-check-input" type="checkbox" id="twoFactor" />
                <label className="form-check-label" htmlFor="twoFactor">
                  <ShieldLock className="me-2" />Two-Factor Authentication
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}