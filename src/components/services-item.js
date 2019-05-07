import React, { Component } from 'react'
import { Collapse } from 'reactstrap'
import serviceData from "../data/services.json"
import "./style.css"

class FaqItem extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      faqItemOpen: false,
      data: this.props
    };
    console.log(this.props)
  }

  toggle() {
    this.setState(state => ({ faqItemOpen: !state.faqItemOpen }));
  }

  render() {
    return (
      <div style={{ backgroundColor: `white`, width: `100%` }} name="services">
        <h2 style={{ textAlign: `center` }}>Web Services</h2>
        <div className="faqContainer">
          {serviceData.map(item => (
            <div className="faqItem" onClick={this.toggle}>
              <div color="primary" style={{ marginBottom: '1rem' }}><h5>{item.title}</h5></div>
              <Collapse isOpen={this.state.faqItemOpen}>
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

export default FaqItem;