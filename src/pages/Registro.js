import React,{useState,useEffect,useContext} from 'react'
import firebase from '../utils/firebase'
import { useNavigate,Link } from 'react-router-dom'
import {GreenAlert,RedAlert} from '../components/Alerts'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import AuthContext from '../context/AuthContext'

const Registro = () => {
  const context = useContext(AuthContext)
  const [alert, setAlert] = useState(null)
  let navigate = useNavigate();
  const [userData, setuserData] = useState([])
  useEffect(()=>{
    localStorage.clear()
  },[])
  const handleOnChange=({target})=>{
    setuserData({
      ...userData,
      [target.name]:target.value
    })
  }
  const handleOnSubmit=async(e)=>{
    e.preventDefault()
    try {
     const res = await firebase.auth().createUserWithEmailAndPassword(userData.email,userData.password)
     console.log(res)
     if(res.user.uid){
       setAlert(false)
      localStorage.setItem("uid",res.user.uid)
      const document = await firebase.firestore().collection("usuarios")
      .add({
        name:userData.name,
        lastname:userData.lastname,
        userId:res.user.uid
      })
      localStorage.setItem("documentId",document.id)
      context.loginUser()
      navigate(`/home/${res.user.uid}`)
      
    }
    } catch (error) {
      setAlert(true)
    }
  }
  return (
    <Container >
      <Row className="text-center" >
       <Col lg={5}>
        <GreenAlert alert={alert} mensaje={"Iniciado correctamente."} />
        <RedAlert alert={alert} setAlert={setAlert} mensaje={"Error al iniciar sesion"}/>
      <div className="input-login border-bottom border-top">
           <form onSubmit={handleOnSubmit}>
      <Row className="text-center mt-5">
           <Col lg={{offset:2,span:8,offset:2}} className="mb-3">
            <input type="text" placeholder="Email" name="email" className="form-control" onChange={handleOnChange} ></input>
          </Col>
       </Row>
        <Row className="text-center">
               <Col lg={{offset:2,span:8,offset:2}} className="mb-3">
                <input type="text" placeholder="Password" name="password" className="form-control" onChange={handleOnChange}></input>
                </Col>
              
        </Row>
        <Row className="text-center">
               <Col lg={{offset:2,span:8,offset:2}} className="mb-3">
                <input type="text" placeholder="Nombre" name="name" className="form-control" onChange={handleOnChange}></input>
                </Col>
              
        </Row>
        <Row className="text-center">
               <Col lg={{offset:2,span:8,offset:2}} className="mb-3">
                <input type="text" placeholder="Apellido" name="lastname" className="form-control" onChange={handleOnChange}></input>
                </Col>
              
        </Row>
        <Row className=" text-center">
          <Col lg={12}>
            <Button type="submit" className="btn-success mb-3">Registrarme</Button>
            </Col>
         <Col lg={{span:4,offset:4}}><p>Ya posees una cuenta?</p><Link to="/login">Ingresar</Link></Col>

        </Row>
        
      </form>
      
       </div>
       </Col>
       <Col lg={7} className="mt-5">
          <img src="https://campus.utnba.centrodeelearning.com/pluginfile.php/1/theme_impression/logo/1642623009/eLearning-fondo-transparente.png" alt="Imagen UTN" style={{width:"100%",height:"auto",objectFit:"contain"}}></img>
         </Col>
       </Row>
       

    </Container>
  )
}

export default Registro