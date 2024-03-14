/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import {  Badge, Container, Form } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../REDUX/Slices/productSlice'


function Header({insideHome}) {
  const dispatch = useDispatch()
  const cartCount = useSelector(state=>state.cartReducer).length
  const wishlistCount = useSelector(state=>state.wishlistReducer).length
  return (
        <>
                  
        
    <Navbar style={{zIndex:'10'}} className="bg-info  position-fixed top-0 w-100 ">
      <Container >
        <Link style={{textDecoration:'none',fontSize:'25px'}} to={'/'}> <i className="fa-solid fa-truck-fast"></i> E-CART</Link>
        
        <Navbar.Collapse className='justify-content-end' >
           { insideHome && <Form className="w-25">
                      <Form.Control onChange={(e)=>dispatch(searchProduct(e.target.value.toLowerCase()))} type="search" placeholder="Search" className="me-2 rounded" aria-label="Search"/>
            </Form>}
          
                   
             <Link className='px-5'  style={{textDecoration:'none'}} to={'/Wishlist'}><i style={{color:'red'}} className="fa-solid fa-heart "></i> WishList
             <Badge bg="secondary" >{wishlistCount}</Badge>
             </Link>
             
             <Link className='px-3' style={{textDecoration:'none'}} to={'/Cart'}><i style={{color:'yellow'}} className="fa-solid fa-cart-shopping "></i>CART 
             <Badge bg="secondary">{cartCount}</Badge>
             </Link>
             
           
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
         
         
        </>
  )
}

export default Header