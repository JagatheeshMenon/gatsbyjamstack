import React from 'react'
import {Card, Button} from 'react-bootstrap'

const CardBox = (props) => (
<div>
        <div className="row justify-content-md-center pt-3">
        <div className="col col-lg-6">
        <Card>
            <Card.Img variant="top" src={ props.image } />
            <Card.Body>
                <Card.Title>{ props.titleFirst }</Card.Title>
                <Card.Text>{ props.descriptionFirst }</Card.Text>
                <Button variant="primary" href={props.readMore}>Read more....</Button>
            </Card.Body>
        </Card>
        </div>
    </div>
</div>
);

export default CardBox;

