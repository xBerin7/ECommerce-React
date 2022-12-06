import React,{useEffect,useState} from 'react'
import {Link,useParams,useNavigate} from 'react-router-dom'
import Registro from '../pages/Registro'
import firebase from '../utils/firebase'
import Login from '../pages/Login'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import AuthContext from '../context/AuthContext'
import context from 'react-bootstrap/esm/AccordionContext'



const NavBar = () => {
  const navigate = useNavigate()
  const params = useParams()
  console.log("Estos son los parametros pa",params)
  const [userData, setUserData] = useState([])

  const docId= localStorage.getItem("documentId")

  useEffect(()=>{
    const getUserInfo=async()=>{
      
     const querySnap = await firebase.firestore().collection("usuarios").doc(docId).get()
      .then((e)=>{
        setUserData(e.data())
        console.log("XD",userData)
        console.log(e.data())
      })
    }
    getUserInfo()
  },[])
  
  
  
  return (
    <AuthContext.Consumer>{context =>
    <Navbar style={{backgroundColor:"#050d25"}} variant="light" className="mb-4" expand="lg">
      <Container fluid>
      <Navbar.Brand href="#">UTN</Navbar.Brand>
     <a href="https://www.frba.utn.edu.ar/"> <img src="https://campus.utnba.centrodeelearning.com/pluginfile.php/1/theme_impression/logo/1642623009/eLearning-fondo-transparente.png" alt="Logo de la UTN" style={{width:"15vh"}} className="mx-2"></img></a>
     <Navbar.Toggle aria-controls="navbarText"><span className="navbar-toggler-icon"></span></Navbar.Toggle>
     
    
     <Navbar.Collapse id="navbartext">
        <Nav className="me-auto">
        <Nav.Link><Link to="/" style={{ textDecoration: 'none',color:"grey" }}>Home </Link></Nav.Link>
        {!context.userLogin && <>
        <Nav.Link><Link to="/login" style={{ textDecoration: 'none',color:"grey" }}>Ingresar</Link></Nav.Link>
        <Nav.Link><Link to="/registro" style={{ textDecoration: 'none',color:"grey" }}>Registro</Link></Nav.Link>
        </>}
        {context.userLogin && <Nav.Link to="/" style={{ textDecoration: 'none',color:"grey" }} onClick={(e)=>context.logOutUser().then(localStorage.removeItem("token").then(navigate('/login')))}>LogOut </Nav.Link>}
        </Nav>
          {context.userLogin && <span className="navbar navbarText"><a className="btn"style={{backgroundColor:"#4717F6",color:"#E7DFDD"}}>Bienvenido {userData?.name}</a></span>}

        {context.userLogin && 
        <>
      <span className="navbar-text">
      <Link to={`/${userData?.userid}/carrito`}><img src="https://cdn-icons-png.flaticon.com/512/107/107831.png" className="mx-4"style={{width:"38px"}} ></img></Link>
    </span>
    </> }
        </Navbar.Collapse>
  
      
      </Container>
    <hr/>
    </Navbar> }
    </AuthContext.Consumer>
   
    
  )
}

export default NavBar