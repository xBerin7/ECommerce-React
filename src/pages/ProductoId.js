import React ,{useEffect,useState}from 'react'
import {useParams} from 'react-router'
import { FetchApiId } from '../utils/FetchApi'
import CardId from '../components/CardId'
import Loading from '../components/Loading'
const ProductoId = (data) => {
  const {id}=useParams()
  const [cardInfo, setCardInfo] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    const setDBRes=async()=>{
      try{
          setLoading(true)
          const setInfo= await FetchApiId(id)
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
    <div className='container'>
      <h3 className="text-center mb-4" style={{color:"#E7DFDD"}}>Informacion del producto</h3>
      <hr style={{backgroundColor:"white"}}/>
      <CardId data={cardInfo}/>
        
    </div>
    </Loading>
  )
}

export default ProductoId