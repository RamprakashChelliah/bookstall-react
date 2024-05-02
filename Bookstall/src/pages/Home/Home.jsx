import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import BookDisplay from '../../components/BookDisplay/BookDisplay'
import ExploreCategories from '../../components/ExploreCategories/ExploreCategories'

const Home = () => {

    const [category, setCategory] = useState("All")

  return (
    <div>
      <Header/>
      <ExploreCategories category={category} setCategory={setCategory}/>
      <BookDisplay category={category}/>
    </div>
  )
}

export default Home
