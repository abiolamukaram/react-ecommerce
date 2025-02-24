/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({filteredItems}) => {
  return (
    <div>
       {
        filteredItems.map((item) => {
            <div key={item.id}>
                <Link to={`/shop/${item.id}`}>
                  <img src={item.image} alt="" />
                </Link>
                <div className='mt-4 px-4'>
                  <h4>{item.title}</h4>
                </div>
            </div>
        })
       }
    </div>
  )
}

export default Cards
