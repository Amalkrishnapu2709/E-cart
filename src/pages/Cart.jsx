// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link,  useNavigate } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { decQuantity, emptyCart, incQuantity, removeCartItem } from '../REDUX/Slices/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cartItems =useSelector(state=>state.cartReducer)
  const [cartTotal,setCartTotal] = useState(0)
  useEffect(()=>{
    if(cartItems?.length>0){
      setCartTotal(cartItems?.map(item=>item.totalPrice).reduce((t1,t2)=>t1+t2))
    }else{
      setCartTotal(0)
    }
  },[cartItems])

  const handleDecrementQuantity = (product)=>{
    if(product.quantity>1){
    dispatch(decQuantity(product.id))
    }else{
      dispatch(removeCartItem(product.id))
    }
  }
  const handleCheckOut = ()=>{
    dispatch(emptyCart())
    toast.success("Order Placed Successfully ... thankyou for purchasing with us!!!")
    setTimeout(()=>{
      navigate("/")
    },[2000])

  }
  return (
    <>
    <Header/>
    <div className="container" style={{marginTop:'150px'}}>
      { cartItems?.length>0?
        <div className="pt-5">
        <h1>Cart Summary</h1>
        <div className="row mt-5">
          <div className="col-lg-8">
            <table className='table shadow'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>...</th>
                </tr>
              </thead>
              <tbody>
              {
                cartItems?.map((product,index)=>(
                  // eslint-disable-next-line react/jsx-key
                  <tr>
                  <td>{index+1}</td>
                  <td>{product.title.slice(0,16)}...</td>
                  <td><img width={'60px'} height={'60px'} src={product.thumbnail} alt="" /></td>
                  <td>
                    <div className='d-flex'>
                      <button onClick={()=>handleDecrementQuantity(product)}  className='btn fw-bolder'><b style={{fontSize:'20px'}}>-</b></button>
                      <input value={product.quantity} style={{width:'70px'}}  className='form-control' type="text" placeholder='0' readOnly />
                      <button onClick={()=>dispatch(incQuantity(product.id))} className='btn fw-bolder'><b style={{fontSize:'20px'}}>+</b></button>
                    </div>
                  </td>
                  <td>$ {product.totalPrice}</td>
                  <td>
                    <button onClick={()=>dispatch(removeCartItem(product.id))} className='btn'><i className='fa-solid fa-trash text-primary'></i></button>
                  </td>
                </tr>
                
                ))
              }
              
              </tbody>
            </table>
            <div className="float-end mt-3">
              <button onClick={()=>dispatch(emptyCart())} className='btn btn-danger'>EMPTY CART</button>
              <Link className='btn btn-primary ms-5' to={'/'}>Shop more</Link>
            </div>
          </div>
          <div className="col-lg-4 ">
              <Card className='shadow rounded p-5'>
                <h5>Total Items: {cartItems.length}</h5>
                <h5>Total Amount:$ {cartTotal}</h5>
                <button onClick={handleCheckOut} className='btn btn-success'>Check Out</button>
              </Card>
          </div>
        </div>
        </div>
      :
        <div style={{height:'70vh'}} className="w-100 d-flex justify-content-center align-items-center flex-column">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png" alt="" />
          <h3>Your Cart is Empty</h3>
        </div>
      }
      
    </div>
    <ToastContainer position='top-center' theme='colored' autoClose={3000} />

    
    </>
  )
}

export default Cart