import React from 'react'
import { Card } from 'react-bootstrap'
const Product = ({ product }) => {
    const dir = {
        name: 'sanjay',
        age: 12
    }

    console.log(`hello` + dir.name)

    return (
        <Card className='my-3 p-3 rounded'>
            <a href={`product/${product.id}`}>
                <Card.Img src={product.images[0]} variant='top' />
            </a>


            <Card.Body>
                <a href={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </a>

                <Card.Text as='div'>
                    <div>
                        {product.slug}

                    </div>
                </Card.Text>

                <Card.Text as='h3'>${product.price}</Card.Text>
            </Card.Body>

        </Card>

    )
}

export default Product
