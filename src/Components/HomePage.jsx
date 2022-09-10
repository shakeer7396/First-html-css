import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const HomePage = () => {
    const [details,setDetails]=useState([])
    const getData=async()=>{
      let res = await fetch("https://dog.ceo/api/breeds/list/all")
      let data=await res.json()
      setDetails(data)
      console.log(data)
    }
  
    useEffect(()=>{
      getData()
    },[])
  return (
    <div>
        <Navbar />
        <div style={{paddingTop:"100px"}}>
        {
          details?.length>0 && details?.map((item)=>{

            return( 
                <div className='data'>
                  
                    <p >{item.message.terrior}</p>
                   
                  
              </div>
            )
          })
        }
      </div>
        
        
    </div>
  )
}

export default HomePage