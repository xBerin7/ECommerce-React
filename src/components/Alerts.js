import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
let contador = 1
export const GreenAlert=({mensaje,alert})=>{
  if(alert == false){
  return(
    <Alert key={contador++} variant="success">
      {mensaje}
    </Alert>)}
}
export const RedAlert=({mensaje,alert,setAlert})=>{
  if(alert){
  return(
    <Alert variant="danger">
    <Alert.Heading>Hubo un error</Alert.Heading>
    <p>
      Verifique sus datos  y vuelva a intentarlo.
    </p>
    <hr />
    <div className="d-flex justify-content-end">
      <Button onClick={() => setAlert(null)} variant="outline-danger" className="text-center">
        Cerrar
      </Button>
    </div>
  </Alert>
  )}
}