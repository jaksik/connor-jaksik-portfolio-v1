import React from 'react'
import ServiceItem from "./services-item"
import serviceData from "../data/services.json"
import "./style.css"

const ServicesContainer = () => (
    <div style={{ backgroundColor: `white`, width: `100%`}}>
        <h2 style={{ textAlign: `center`}}>Web Services</h2>
        <div className="faqContainer">
            {serviceData.map(item => (
                <ServiceItem
                    title={item.title}
                    description={item.description}
                    products={item.products}
                />
            ))}
        </div>
    </div>
)

export default ServicesContainer