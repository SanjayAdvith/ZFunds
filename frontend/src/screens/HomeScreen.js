import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
//import products from '../products.json'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'

import ProductCarousel from '../components/ProductCarousel'
import {
    listProducts
} from '../actions/productActions'
//import axios from 'axios'

const HomeScreen = ({ location, history, match }) => {
    const keyword = match.params.keyword
    const dispatch = useDispatch()


    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList   // comes from reducers 
    useEffect(() => {
        // if (userInfo) {
        //     history.push(redirect)
        // } else {
        //     history.push('/login')
        // }

        dispatch(listProducts(keyword))


    }, [dispatch, userInfo, history, redirect, keyword])

    return (
        <>
            <ProductCarousel products={products} />
            <h1>Latest products</h1>
            {loading ? <Loader /> : error ? <Message cariant="danger">{error}</Message> : (

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
