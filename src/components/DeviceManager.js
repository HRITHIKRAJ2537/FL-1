import React from 'react';
import { Lightbulb, ThermometerHalf, DoorClosed, Fan, PlusCircle } from 'react-bootstrap-icons';

export default function DeviceManager() {
  return (
    <div className="container-fluid px-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="mb-0">Manage Your Devices</h5>
        <button className="btn btn-primary"><PlusCircle size={18} className="me-2" />Add Device</button>
      </div>

      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title mb-0">Living Room Light</h5>
                <Lightbulb size={24} className="text-warning" />
              </div>
              <p className="card-text">Status: Connected</p>
              <p className="card-text text-muted">Last updated 3 mins ago</p>
              <div className="d-flex justify-content-between">
                <button className="btn btn-outline-primary btn-sm">Configure</button>
                <button className="btn btn-outline-danger btn-sm">Remove</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title mb-0">Kitchen Light</h5>
                <Lightbulb size={24} className="text-warning" />
              </div>
              <p className="card-text">Status: Connected</p>
              <p className="card-text text-muted">Last updated 5 mins ago</p>
              <div className="d-flex justify-content-between">
                <button className="btn btn-outline-primary btn-sm">Configure</button>
                <button className="btn btn-outline-danger btn-sm">Remove</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title mb-0">Thermostat</h5>
                <ThermometerHalf size={24} className="text-danger" />
              </div>
              <p className="card-text">Status: Connected</p>
              <p className="card-text text-muted">Last updated 2 mins ago</p>
              <div className="d-flex justify-content-between">
                <button className="btn btn-outline-primary btn-sm">Configure</button>
                <button className="btn btn-outline-danger btn-sm">Remove</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title mb-0">Front Door Lock</h5>
                <DoorClosed size={24} className="text-success" />
              </div>
              <p className="card-text">Status: Connected</p>
              <p className="card-text text-muted">Last updated 1 min ago</p>
              <div className="d-flex justify-content-between">
                <button className="btn btn-outline-primary btn-sm">Configure</button>
                <button className="btn btn-outline-danger btn-sm">Remove</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title mb-0">Ceiling Fan</h5>
                <Fan size={24} className="text-primary" />
              </div>
              <p className="card-text">Status: Connected</p>
              <p className="card-text text-muted">Last updated 4 mins ago</p>
              <div className="d-flex justify-content-between">
                <button className="btn btn-outline-primary btn-sm">Configure</button>
                <button className="btn btn-outline-danger btn-sm">Remove</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
