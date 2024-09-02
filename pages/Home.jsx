import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/Product'

export default function Home() {

  const productList = useSelector((state) => state.products)


  return productList.loading ? <h1 style={{textAlign: "center"}}>Loading..</h1> : (
    <div className="products-container">
      {productList.list.length == 0 ? <h1 style={{textAlign: "center"}}>Something went wrong</h1> : productList.list.map(({ id, title, rating, price, image }) => (
        <Product
          key={id}
          productId={id}
          title={title}
          rating={rating.rate}
          price={price}
          imageUrl={image}
        />
      ))}
    </div>
  )
}