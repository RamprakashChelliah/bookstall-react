import React, { useContext } from 'react'
import './BookDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import BookItems from '../BookItems/BookItems'
import { food_list } from '../../assets/assets'

const BookDisplay = (category) => {
    const {book_list} = useContext(StoreContext)
    return (
    <div className='book-display' id='food-display'>
        <h2>Top books near you</h2>
        <div className='book-display-list'>
            {food_list.map((item, index) => {
                if(category.category === "All" || category.category === item.category){
                    return <BookItems key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                }
            })}
        </div>
    </div>
  )
}

export default BookDisplay
