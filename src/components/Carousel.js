import React,{useEffect,useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import {FetchApi} from '../utils/FetchApi'
import Loading from '../components/Loading'
const CarouselComponent = () => {
    const [cardInfo, setCardInfo] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        const setDBRes=async()=>{
            try{
              const setInfo= await FetchApi()
              await setCardInfo(setInfo)
              setLoading(false)
            }catch(error){
              setLoading(true)
            }
          }
          setDBRes()
          },[])



  return (
    <Loading loading={loading}>
   
    <Carousel variant="dark" >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={cardInfo[16]?.image}
      alt="First slide"
      style={{maxHeight:"55vh",objectFit:"scale-down"}}
    />
    <Carousel.Caption >
      <h5>{cardInfo[0]?.title}</h5>
      <p>{cardInfo[0]?.description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={cardInfo[11]?.image}
      alt="Second slide"
      style={{maxHeight:"55vh",objectFit:"scale-down"}}
    />
    <Carousel.Caption >
      <h5>{cardInfo[1]?.title}</h5>
      <p>{cardInfo[1]?.description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={cardInfo[6]?.image}
      alt="Third slide"
      style={{maxHeight:"55vh",objectFit:"scale-down"}}
    />
    <Carousel.Caption >
      <h5>{cardInfo[2]?.title}</h5>
      <p>{cardInfo[2]?.description}</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Loading>
  )
}

export default CarouselComponent