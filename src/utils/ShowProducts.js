import React,{useState,useEffect} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import CardComponent from '../components/CardComponent'
import {FetchApi} from '../utils/FetchApi'
import Loading from '../components/Loading'

const ShowProducts = ({number}) => {
    const [loading, setLoading] = useState(true)
    const [cardInfo, setCardInfo] = useState([])
    useEffect(()=>{
      const setDBRes=async()=>{
          try{
            setLoading(true)
            const setInfo= await FetchApi()
            await setCardInfo(setInfo)
            console.log("Esto tiene el useState",cardInfo)
            setLoading(false)
          }catch(error){
            setLoading(false)
          }
        }
        setDBRes()
        },[])
    
  return (
     
      <Loading loading={loading}>
        <Row>
          <Col  sm={12}>
            <CardGroup className=" mt-2">
      {cardInfo.map((e)=>{ 
  return <Col lg={4} md={6} sm={12}className="mb-4">
    <Card style={{width:"95%",height:"100%"}} >{cardInfo.length > 0?<CardComponent data={cardInfo[number++]}/> :<p>Cargando...</p>}</Card>
    </Col>
 
        })}
  </CardGroup>
  </Col>
  </Row>
        

        </Loading>
   
  )
}

export default ShowProducts