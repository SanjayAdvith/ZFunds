import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../products.json'
import Product from '../components/Product'
import ProductCarousel from '../components/ProductCarousel'
const HomeScreen = () => {
    return (
        <>
            <ProductCarousel />
            <h1>Latest products</h1>
            <Row>
                {products.map(product => (
                    <Col sm={12} md={6} lg={4} xl={3} >
                        <Product product={product} key={product.id} />
                    </Col>
                )
                )}
            </Row>
        </>
    )
}

export default HomeScreen
