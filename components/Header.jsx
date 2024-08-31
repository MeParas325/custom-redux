 import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../assets/cart-icon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInitialProducts, fetchProducts, updateAllProducts } from '../store/slices/productSlice'
import productList from "../store/products"

export default function Header() {

  const cartItems = useSelector((state) => state.cartItems)
  const dispatch = useDispatch()

  useEffect(() => {  
    dispatch(fetchInitialProducts)
  }, [])

  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <img src={CartIcon} alt="cart-icon" />
          <div className="cart-items-count">
            {
              cartItems.length
            }
          </div>
        </Link>
      </div>
    </header>
  )
}