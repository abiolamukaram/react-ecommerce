import React from 'react'
import Banner from './Banner'
import Category from './Category'
import Products from './Products'
import Cards from '../../components/Cards'

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Products />
      {/* <Cards /> */}
    </div>
  )
}

export default Home
