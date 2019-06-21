import React, { Component } from 'react'
import { Collapse } from 'reactstrap'
import serviceData from "../data/services.json"
import "./style.css"

class Services extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      serviceItemOpen: false,
      data: this.props
    };
  }

  toggle() {
    this.setState(state => ({ serviceItemOpen: !state.serviceItemOpen }));
  }

  render() {
    return (
      <div style={{ backgroundColor: `white`, width: `100%` }} name="services">
        <h2 style={{ textAlign: `center` }}>Web Services</h2>
        <div className="services-container">
          {serviceData.map(item => (
            <div className="service-item" onClick={this.toggle}>
              <div color="primary" style={{ marginBottom: '1rem' }}><h5>{item.title}</h5></div>
              <Collapse isOpen={this.state.serviceItemOpen}>
                <div className="container">
                  <p>{item.description}</p>
                </div>
                {item.products.map(product => (
                  <div>
                    <strong>{product.name}</strong>
                    <p>{product.price}</p>
                  </div>
                ))}
              </Collapse>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Services;