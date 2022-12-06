import React from 'react'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'

const CardComponent = (props) => {
  return (
    <>

    <Card.Body className="text-center">
    <img src={props.data?.image} className="card-img-top mb-4 py-4 px-4 " style={{ width: '16vh',objectFit: 'cover'}} alt={props.data.description}></img>
    
      <Card.Title style ={{fontSize:"2vh"}}>{props.data.title}</Card.Title>

      
      </Card.Body>
      <Card.Footer className="text-center">
      <div className="mt-2">
       <p className="btn btn-success mx-1" style={{maxWidth:"80%"}} >${props.data.price}</p>
       <Link to={`/productos/${props.data.id}`}> <p className="btn btn-primary text-center" style={{maxWidth:"100%"}}>Mas Info</p></Link> 
       </div>
       </Card.Footer>

      

  


    </>
  )
}

export default CardComponent