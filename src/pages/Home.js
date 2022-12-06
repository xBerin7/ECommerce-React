import React from 'react'
import Container from 'react-bootstrap/Container'
import CarouselComponent from '../components/Carousel'
import ShowProducts from '../utils/ShowProducts'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Home = () => {
  

  return (
      <Container>
        <Row>
          <Col>
        <Container fluid  className="mb-5 mt-5"  style={{backgroundColor:"white"}}>
            <CarouselComponent/>
        </Container>
         </Col>
        </Row>
        <Row>
          <Col lg={12} md={12}>
        <ShowProducts number = {0}/>
        </Col>
        </Row>
        
    

       
        
        
        

    </Container>
    
  )
}

export default Home