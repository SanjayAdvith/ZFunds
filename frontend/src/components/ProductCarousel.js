import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import products from '../products.json'
const ProductCarousel = () => {

  return (
    <>
      <Carousel pause='hover' className='bg-dark'>
        {products.map((product) => (
          <Carousel.Item key={product.id} >
            <Link to={`/product/${product.id}`}>
              <Image src={product.images[0]} alt={product.name} fluid />
              <Carousel.Caption className='carousel-caption'>
                <h2>
                  {product.name} (${product.price})
              </h2>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  )
}

export default ProductCarousel
