import React from 'react'
import {Link} from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const CardId = (props) => {
  const userUID= localStorage.getItem('useruid')
  console.log("Estas son las props",props)
  return (
    <Row>
     <Col lg={{span:3,offset:2}} md={{span:3,offset:2}} sm={10} >
       <Card.Body>
       
        <Card.Img src={props.data.image} variant="top" style={{width:'45vh'}} alt={props.data.description}></Card.Img>
        </Card.Body>
     
      </Col>
      <Col lg={{span:3,offset:2}} md={{span:4,offset:3}} sm={12} >
       <Card.Title style={{color:"#E7DFDD"}}>{props.data.title}</Card.Title>
       <Card.Text style={{color:"#E7DFDD"}}>{props.data.description}</Card.Text>
       <Card.Text><small className="btn btn-sucess" style={{color:"#E7DFDD"}}>${props.data.price}</small></Card.Text>
      <div>
      <a className="btn btn-primary mx-2" style={{color:"#E7DFDD"}}>Agregar al carrito</a>
      <Link to={`/${userUID}/carrito`}><a className="btn btn-dark">Checkout</a></Link>
      </div>
      </Col>
     <hr style={{backgroundColor:"white"}}/>
    
    
     </Row>

  


  )
}

export default CardId