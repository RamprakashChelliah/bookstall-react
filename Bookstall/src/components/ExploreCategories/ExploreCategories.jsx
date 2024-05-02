import React from 'react'
import './ExploreCategories.css'
import { category_list } from '../../assets/assets'

const ExploreCategories = ({category, setCategory}) => {

  return (
    <div className='explore-category' id='explore-category'>
      <h1>Explore our category</h1>
      <p className='explore-category-text'>Choose from a diverse categories featuring a list of books</p>
      <div className="explore-category-list">
        {category_list.map((item, index) => {
            return (
                <div onClick={() => setCategory(prev=> prev === item.category_name ? "All" : item.category_name)} key={index} className='explore-category-list-item'>
                    <img className={category === item.category_name ? 'active' : ""} src={item.category_image} alt="" />
                    <p>{item.category_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreCategories
