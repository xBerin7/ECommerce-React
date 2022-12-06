import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { CarritoProduct } from '../components/CarritoProduct'
import { FetchAPICarrito } from '../utils/FetchApi'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { CheckOut, getCart } from '../utils/FetchMyApi'

const Carrito = () => {
    const navigate = useNavigate()
    const [Cart, setCart] = useState([])
    const [cartInfo, setCartInfo] = useState([])
    const [PriceWithTaxes, setPriceWithTaxes] = useState()
    useEffect(()=>{
        const resFire = FetchAPICarrito()
        const getCartUser =async()=>{
            const res= await  getCart()
            setCartInfo(res.data[0])
            setPriceWithTaxes(res.data[0].totalPrice)
            console.log("respuestaDB",res,"PriceWIthTaxes",PriceWithTaxes)
            }
        getCartUser()
    },[])
    const RedirectUser=async()=>{
       const res = await CheckOut()
        window.location.href=`${res.data.href}`
    }
  return (
    <Container>
        <Row>
            <Col lg={8} md={6}>
                <h3 className="text-center " style={{color:"#164094"}}>Carrito de Compra</h3>
                <div>
                    <p className="text-center text-muted" style={{color:"#E7DFDD"}} >Enviado desde Argentina</p>
                </div>
                <hr style={{backgroundColor:"#050d25"}}/>
            <div className="products">
                <CarritoProduct/>
                <CarritoProduct/>
            </div>
            </Col>
            <Col lg={4} md={6}className="border">
                <div className="row align-items-center">
                <h4 className="text-center" style={{color:"#164094"}}>Detalles de la compra</h4>
                    <div className="d-flex flex-column gap-2 mt-2">
                        <div>
                            <p className="fw-bold text-center" style={{color:"#5380D9"}}>Precio del producto </p>
                            {cartInfo?.products?.map((e)=>{return <div className="text-center">
                            <p style={{color:"#5380D9"}}>{e.title}</p>
                            <p style={{color:"#5380D9"}}>${e.price}</p>
                            <hr style={{backgroundColor:"#050d25"}}/>
                            </div>
                            })}
                        </div>
                        <hr style={{backgroundColor:"#050d25"}}/>
                        <div>
                            <p className="fw-bold">Impuestos</p>
                            <p >Precio Inicial : ${PriceWithTaxes? cartInfo.totalPrice : undefined}</p>
                            <p >IVA :$ {PriceWithTaxes? ()=>{ 
                                setPriceWithTaxes((PriceWithTaxes * 0.21).toFixed())
                                return <p style={{color:"#E7DFDD"}}>(PriceWithTaxes * 0.21).toFixed()</p>} : undefined}</p>
                        </div>
                        <hr style={{backgroundColor:"#050d25"}}/>
                        <div><p className="fw-bold">Envio</p></div>
                        <hr style={{backgroundColor:"#050d25"}}/>
                        <div>
                            <p  className="fw-bold" style={{color:"dark"}}>Total:</p>
                            <p style={{color:"dark"}}>Total : ${cartInfo.totalPrice ? (cartInfo.totalPrice + PriceWithTaxes):undefined}</p>
                        </div>
                    </div>
                <div className="options text-center mt-5">
                <a className="btn btn-success btn-lg " onClick={()=>{RedirectUser()}}>Checkout</a>
                
                </div>
                </div>
                
            </Col>
        </Row>
    </Container>
  )
}

export default Carrito