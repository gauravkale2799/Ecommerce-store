import "./Cart.scss";
import {MdClose} from "react-icons/md"
import {BsCartX} from "react-icons/bs"
import CartItem from "./CartItem/CartItem"
const Cart = (setShowCart) => {
    return (
        <div className="cart-panel">
            <div className="opac-layer"></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span className="close-btn"onClick={()=>setShowCart(false
                        )}>
                        <MdClose/>
                        <span className="text">close</span>
                    </span>
                </div>
                {/* <div className="empty-cart">
                    <BsCartX/>
                    <span>No products in the cart</span>
                    <button className="return-cta">Retutn To Shop</button>
                </div> */}
                <>
                <CartItem/>
                <div className="cart-footer">
                    <div className="subtotal">
                        <span className="text">Subtotal :</span>
                        <span className="text-total">&#8377;1234</span>
                    </div>
                    <div className="button">
                        <div className="checkout-cta">Checkout</div>
                    </div>
                </div>
                </>
            </div>
        </div>
    )
};

export default Cart;
