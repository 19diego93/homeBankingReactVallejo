import React from 'react'
import { Carousel } from "flowbite-react"
const CarouselBanner = ({ widthHeight }) => {
  return (
    <div className={widthHeight}>
      <Carousel slideInterval={5000} pauseOnHover>
        <img src="https://thedicedungeon.co.uk/cdn/shop/articles/Dungeons_and_Dragons_Classes.jpg?v=1591716758&width=900" alt="1" />
        <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2020/12/rules-DD-players-can-ignore.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5" alt="2" />
        <img src="https://shopzobie.com/cdn/shop/files/Luffy-Gear-Five-Gold-Bank-Note-Prop-One-Piece-Anime_1800x1800.jpg?v=1714464214" alt="3" />
        <img src="https://media.traveler.es/photos/61376f0b68a6ada2592a7261/master/w_1600,c_limit/136788.jpg" alt="4" />
      </Carousel>
    </div>
  )
}

export default CarouselBanner
