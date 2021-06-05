import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
//import products from '../products.json'
import Product from '../components/Product'
import ProductCarousel from '../components/ProductCarousel'
import {
    listProducts
} from '../actions/pruductActions'
//import axios from 'axios'

const HomeScreen = () => {
    const dispatch = useDispatch()


    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList   // come from reducers 
    useEffect(() => {
        dispatch(listProducts())


    }, [dispatch])

    return (
        <>
            <ProductCarousel />
            <h1>Latest products</h1>
            {loading ? <h1>loading</h1> : error ? <h2>error</h2> : (

                <Row>
                    {products.map(product => (
                        <Col sm={12} md={6} lg={4} xl={3} >
                            <Product product={product} key={product.id} />
                        </Col>
                    )
                    )}
                </Row>
            )}
        </>
    )
}

export default HomeScreen
