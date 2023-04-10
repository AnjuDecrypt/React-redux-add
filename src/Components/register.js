import React from 'react'
import images from './images.jpg'
import Ecommerce from './Ecommerce.jpg'
export default function register(props) {
  console.warn("props",props)
    return (
        <>
        
            <div className="cart-wrapper mt-5">
                <div className="img-wrapper item">
                    <img src={images} />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                <button  onClick={ ()=> props.addToCartHandler({pice:1000,name:'i phone 11'})}>
                        Add To Cart</button>
                </div>
            </div>
        </>

    )
}
