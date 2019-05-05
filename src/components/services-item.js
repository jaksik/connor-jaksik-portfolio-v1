import React, { Component } from 'react';
import { Collapse } from 'reactstrap';

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
      <div className="faqItem" onClick={this.toggle}>
        <div color="primary" style={{ marginBottom: '1rem' }}><h5>{this.props.title}</h5></div>
        <Collapse isOpen={this.state.faqItemOpen}>
          <div className="container">
            <p>{this.props.description}</p>
          </div>
          
          {this.props.products.map(product => (
              <div>
                  <strong>{product.name}</strong>
                  <p>{product.price}</p>
              </div>
          ))}
        </Collapse>
      </div>
    );
  }
}

export default FaqItem;