import React from 'react'
import Navbar from './Navbar'

const SearchPage = () => {
  return (
    <div>
        <Navbar />
        <div>
            <center style={{paddingTop:"100px"}}>
             <input type="text" placeholder='Enter Name' />
             <button>Search</button>
            </center>
        

        </div>

    </div>
  )
}

export default SearchPage