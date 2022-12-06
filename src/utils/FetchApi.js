export const FetchApi = async() => {
  const res = await fetch('https://fakestoreapi.com/products')
	const resDB=await res.json()
	 console.log(resDB)
	 return resDB
}

export const FetchApiByCategory = async(category)=>{
	const res = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    const resDB= await res.json() 
        return resDB
}

export const FetchApiId = async(id) => {
	console.log("ESTA ES LA ID",id)
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)
	const resDB=await res.json()
	 console.log(resDB)
	 return resDB
}
export const FetchAPICarrito=async(iduser,idcart)=>{
	const token = localStorage.getItem("token")
	const res = await fetch(`https://backend-ecommerce7.herokuapp.com/cart`,{
		method:"POST",
		body:{
			iduser,
			idcart

		},
		headers:{
			'Content-Type': 'application/json',
			'auth-token':token
		}
		
	})
	return res.json()
}


