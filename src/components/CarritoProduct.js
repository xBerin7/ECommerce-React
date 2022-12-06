import React,{useState,useEffect} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { getCart } from '../utils/FetchMyApi'

export const CarritoProduct = () => {
  const [cartInfo, setCartInfo] = useState([])
  useEffect(()=>{
    const getCartUser =async()=>{
        const res= await  getCart()
        setCartInfo(res.data[0])
      
        console.log("respuestaDB",res)
        }
    getCartUser()
},[])

  return (
    <>
    <Row>
        <Col >
            <img src="https://cdn-icons-png.flaticon.com/512/5110/5110429.png" style={{width:"14vh"}}></img>
        </Col>
         <Col>
            <div className="d-flex justify-content-between gap-5 ">
                <div><p className="fw-bold" style={{color:"#5380D9"}}>Producto:</p><p>{cartInfo.products?cartInfo.products[0].title:undefined}</p></div>
                <div><p className="fw-bold" style={{color:"green"}}>Precio:</p><p>${cartInfo.products?cartInfo.products[0].price:undefined}</p></div>
                <div><p className="fw-bold" style={{color:"#5380D9"}}>Cantidad:</p><p>1</p></div>
                    </div>
          </Col>
                <hr style={{backgroundColor:"#050d25"}}/>
      </Row>
    </>
  )
}
