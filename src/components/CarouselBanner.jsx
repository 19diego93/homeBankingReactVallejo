import React from 'react'
import { Carousel } from "flowbite-react"
const CarouselBanner = ({ widthHeight }) => {
  return (
    <div className={widthHeight}>
      <Carousel slideInterval={5000} pauseOnHover>
        <img src="../../img/bank-finance-horizontal-sale-banner-template_23-2149726028.jpg" alt="1" />
        <img src="../../img/bank-service-concept-facebook-cover-template_23-2150459496.jpg" alt="2" />
        <img src="../../img/illustration-of-banking-banking-equipment-concept-modern-bank-reception-office-interior-horizontal-banner-vector.jpg" alt="3" />
        <img src="../../img/bank-service-concept-sale-banner-template_23-2150487020.jpg" alt="4" />
      </Carousel>
    </div>
  )
}

export default CarouselBanner
