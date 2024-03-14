// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='bg-info text-white '>
        
        <div  className='container mt-5 w-100 py-5 text-white'>
            <div className="footer-content d-flex justify-content-between">
                <div style={{width:'400px'}} className="media">
                    <h5 className='d-flex text-white' ><i className="fa-solid fa-bag-shopping me-2"></i>E-cart</h5>
                    <p style={{textAlign:'justify'}}>Designed and built with all the love in the world by the
                     Bootstrap team with the help of our contributors.</p>
                     <span>Code licensed MIT, docs CC BY 3.0</span>
                     <span>Currently v5.3.2</span>
                </div>
                <div className="links d-flex flex-column text-white">
                    <h5 style={{height:'28px',color:'white'}}>Links</h5>
                    <Link to={'/'} style={{textDecoration:'none',color:'white'}} >Home</Link>
                    <Link to={'/home'} style={{textDecoration:'none',color:'white'}} >cart</Link>
                    <Link to={'/watch'} style={{textDecoration:'none',color:'white'}} >Wishlist</Link>
                </div>
                <div className="guides d-flex flex-column text-white">
                    <h5 style={{height:'28px',color:'white'}}>Guides</h5>
                    <a href="https://react.dev/" target='blank' style={{textDecoration:'none',color:'white'}}>React JS</a>
                    <a href="https://reactrouter.com/en/main" target='blank' style={{textDecoration:'none',color:'white'}}>React Routing</a>
                    <a href="https://react-bootstrap.netlify.app/" target='blank' style={{textDecoration:'none',color:'white'}}>React Bootstrap</a>
    
                </div>
                <div className="contact">
                    <h5 style={{height:'28px',color:'white'}}>Contact Us</h5>
                    <div className='d-flex'>
                        <input type="text" className='form-control me-1' placeholder='Email Id Please' />
                        <button className='btn btn-warning'><i className='fa-solid fa-arrow-right'></i></button>
                    </div>
                    <div className='d-flex justify-content-between mt-2 ' style={{height:'28px'}}>
                        <a href="https://react.dev/"><i className="fa-brands fa-github text-white" ></i></a>
                        <a href="https://react.dev/"><i className="fa-brands fa-twitter text-white" ></i></a>
                        <a href="https://react.dev/"><i className="fa-brands fa-facebook text-white" ></i></a>
                        <a href="https://react.dev/"><i className="fa-brands fa-instagram text-white" ></i></a>
                    </div>
                </div>
            </div>
            <p className='text-center' style={{marginTop:'100px'}}>Copyright &copy; 2024 E-cart. Built with React.</p>
        </div>
    </div>
  )
}

export default Footer