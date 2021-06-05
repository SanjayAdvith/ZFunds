import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
//import products from '../products.json'
import { listProductDetails } from '../actions/pruductActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
const ProductScreen = ({ match }) => {
    const dispatch = useDispatch()

    //const product = products.find((p) => p.id === match.params.id)

    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
    }, [dispatch, match])


    return (
        <>
            <Link to='/' className="btn btn-light my-3">
                Go Back
            </Link>
            {loading ? <Loader /> : error ?
                <Message cariant="danger">{error}</Message> :
                (
                    <Row>
                        <Col md={6}>
                            <Image src={product.images} alt={product.name} fluid />
                        </Col>
                        <Col md={3}>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <h3>{product.name}</h3>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <h5>{product.slug}</h5>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <h2 className="price_color">${product.price}</h2>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>

                        <Col md={3}>
                            <Card>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Price:</Col>
                                            <Col>
                                                <strong>
                                                    ${product.price}
                                                </strong>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Status</Col>
                                            <Col>
                                                {product.is_in_stock > 0 ? product.is_in_stock : 'Out of Stock'}
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Row>
                                            <Col>
                                                <Button
                                                    className="btn-block"
                                                    type="button"
                                                    disabled={product.is_in_stock === 0}
                                                >
                                                    Add to Cart
                                        </Button>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>

                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                )}
        </>
    )
}

export default ProductScreen
