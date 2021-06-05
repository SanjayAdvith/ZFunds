import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Product = ({ product }) => {
    const dir = {
        name: 'sanjay',
        age: 12
    }

    console.log(`hello` + dir.name)

    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`product/${product.id}`}>
                <Card.Img src={product.images} variant='top' />
            </Link>


            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as='div'>
                    <div>
                        { }
                        {product.images}
                    </div>
                </Card.Text>

                <Card.Text as='h3'>${product.price}</Card.Text>
            </Card.Body>

        </Card>

    )
}

export default Product
