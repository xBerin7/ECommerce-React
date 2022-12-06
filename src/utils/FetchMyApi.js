const APIURL =  "https://backend-ecommerce7.herokuapp.com"
const headers =(token)=>{
    const header = {
        "Content-Type": "application/json",
        "Accept":"application/json",
        "auth-token": token
        }
    return header
}

//Esta API es mia y solo la integre en la parte del carrito//
export const RegisterUser = async(data)=>{
    const res = await fetch(`${APIURL}/register`,{
        method:"POST",
        body:{
            name:data.name,
            lastname:data.lastname,
            email:data.email,
            password:data.password
        }
    })
    const resDB = await res.json()
    console.log(resDB)
    return  await resDB 
    



}
export const LoginUser = async(data)=>{
    const res = await fetch(`${APIURL}/login`,{
        method:"POST",
        body:{
            email:data.email,
            passwrod:data.password
        }
    })
    const resDB = await res.json()
    console.log(resDB)
    return await resDB 



}
export const GetProducts = async (data)=>{
    const res = await fetch(`${APIURL}/products`)
    const resDB = await res.json()
    console.log(resDB)
    return resDB
    
}
export const getCart=async(data)=>{
    const res = await fetch(`${APIURL}/cart`,{
        method:"POST",
        headers:{
        "Content-Type": "application/json",
        "Accept":"application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJGaW5hbERldkBnbWFpbC5jb20iLCJpYXQiOjE2NTMzNTEzNDAsImV4cCI6MTY1MzQzNzc0MH0._tG8Qi-jjukO0F3Yga1Ku0cLct0oaM5KovWDudzcNA8"
        },
        body:JSON.stringify({
            "iduser":"6282c48cd4a40f14c23e8583",
            "cartId": "6282c5e55571bbad508b6abc"
        })
    }).then(res=>res.json())
    return res
}
export const CheckOut =async(data)=>{
    const res = await fetch(`${APIURL}/payment/createOrder`,{
        method:"POST",
        headers:{
        "Content-Type": "application/json",
        "Accept":"application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJGaW5hbERldkBnbWFpbC5jb20iLCJpYXQiOjE2NTM0Mjg5NjAsImV4cCI6MTY1MzUxNTM2MH0.EPxP2yRM9slpjspTCFHur7O96KTBrYufpshfz_T_yxo"
        },
        body:JSON.stringify({"cartId":"627eff412da73bb1f6301f20",
            "iduser":"627c4673683e60148732ce71",
            "productId":"6268503cd36d4e63765443e2"
        })
    }).then(res=>res.json())
    console.log("CHECKOUT",res)
    return res 
    
}