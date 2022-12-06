import React,{useState,useContext} from 'react'
import firebase from '../utils/firebase'
import {Link,useNavigate} from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import {GreenAlert,RedAlert} from '../components/Alerts'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'


const Login = () => {
  localStorage.clear()
  const [alert, setAlert] = useState(null)
  const context = useContext(AuthContext)
  const [userData, setuserData] = useState([])
  let navigate = useNavigate()

  const handleOnChange=({target})=>{
    setuserData({
      ...userData,
      [target.name]:target.value
    })
  }
  const handleOnSubmit=async(e)=>{
    e.preventDefault()
    try {
    
     const res = await firebase.auth().signInWithEmailAndPassword(userData.email,userData.password)
     setAlert(false)
     localStorage.setItem("uid",res.user.uid)
     context.loginUser()
     navigate(`/home/${res.user.uid}`)
     
    } catch (error) {
      setAlert(true)
    }
  }
  return (
    <Container >
      
      <Row className="text-center">
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
        <Row className=" text-center">
          <Col lg={12}>
            <Button type="submit" className="btn-success mb-3">Ingresar</Button>
            </Col>
         <Col lg={{span:4,offset:4}}><p>No posees una cuenta?</p><Link to="/registro">Registrarme</Link></Col>

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

export default Login