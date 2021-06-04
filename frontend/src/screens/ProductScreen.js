import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import products from '../products.json'
const ProductScreen = ({ match }) => {
    const product = products.find((p) => p.id === match.params.id)

    return (
        <>
            <Link to='/' className="btn btn-light my-3">
                Go Back
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={product.images[0]} alt={product.name} fluid />
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
        </>
    )
}

export default ProductScreen
