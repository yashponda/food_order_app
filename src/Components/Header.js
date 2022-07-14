// Styles
import '../Styles/Header.css';
// Assets
import logo from '../../src/Assets/logo.png'
import cart from '../../src/Assets/cart.png'

function Header(props) {
  return (
    <>
      <header className="main_header" addCart={props.addCart}>
      <img style={{ marginLeft: '10px', marginTop:'1px', marginRight:'-118px' }} className='meal_img' alt='img' src={logo} />
        <p className="left_header">Food Zone</p>
        <div className="cart">
            <img className='cart_img' alt='cart' src={cart} />
            <p>Your Cart</p>
            <p className="right_header">{props.addCart}</p>
        </div>
      </header> 
    </>
  );
}

export default Header;
