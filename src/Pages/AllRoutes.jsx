import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Components/HomePage'
import PuppyPage from '../Components/PuppyPage'
import SearchPage from '../Components/SearchPage'

const AllRoutes = () => {

  return (

    <div>
        <Routes>
            <Route path={'/'} element={<HomePage />}></Route>
            <Route path={'/puppy'} element={<PuppyPage />}></Route>
            <Route path={'/search'} element={<SearchPage />}></Route>


        </Routes>
    </div>
  )
}

export default AllRoutes