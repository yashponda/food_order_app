// Components
import React,{useState} from 'react';
// Styles
// import '../Styles/App.css';
// import '../Styles/Body.css';
import '../Styles/Meals.css';
//Assets
// import download3 from  '../../src/Assets/download3.jpg'
import tomato from '../../src/Assets/tomato.jpg'
import pizza from '../../src/Assets/pizza.jpg'
// import burger from '../../src/Assets/burger.jpg'

function Meals() {
  const [quantity, setQuantity] = useState(0);
  const [addCart, setAddCart] = useState(0);
  
  const addButtonHandler = (props) => {
    if (quantity < 0){
      alert('Please enter valid quantity...')
    }else{
      alert('Do you want to add this meal in the cart ?')
      setAddCart(addCart + 1);
    }
  }

  const minusHandler = () => {
    // alert('WANT TO REMOVE ITEM ?');
    setQuantity (quantity - 1);
  }

  const plusHandler = () => {
    // alert('WANT TO ADD ITEM ?');
    setQuantity (quantity + 1);
  }

  return (
    <>
      <div className='meals'>

        <div className='items'>
          <p style={{ fontSize: '25px', color: '#bd1212' }}>Tomato Soup </p>
          <p style={{ fontSize: '12px', color: 'black' }}>Tomato soup is a soup with tomatoes as the primary ingredient.</p>
          <p className='price'> Rs. 129 </p>
        </div>

        <div className='items_action'>
          <img className='meal_img' alt='img' src={tomato} />

          <div className='quantity'>
            <p className='qty_txt'>Quantity :- &nbsp;</p>
            <button className='plus_btn' onClick={minusHandler}>-</button> &nbsp;
            <input id='qty' type='number' value={quantity} />&nbsp;
            <button className='plus_btn' onClick={plusHandler}>+</button>
          </div>

        </div>
        <button className='add_btn' onClick={addButtonHandler}>Add</button>

      </div>



      <div className='meals'>

        <div className='items'>
          <p style={{ fontSize: '25px', color: '#bd1212' }}>Pizza </p>
          <p style={{ fontSize: '12px', color: 'black' }}>Pizza is a dish consisting of
            a usually round leavened wheat-based dough.</p>
          <p className='price'> Rs. 199 </p>
        </div>

        <div className='items_action'>
          <img className='meal_img' alt='img' src={pizza} />

          <div className='quantity'>
            <p className='qty_txt'>Quantity :- &nbsp;</p>
            <button className='plus_btn' onClick={minusHandler}>-</button> &nbsp;
            <input id='qty' type='number' value={quantity} />&nbsp;
            <button className='plus_btn' onClick={plusHandler}>+</button>
          </div>

        </div>
        <button className='add_btn' onClick={addButtonHandler}>Add</button>

      </div>

      {/*       
      <div className='meals'>
          <p>Tomato Soup </p>
            <button className='add_btn' onClick={addButtonHandler}>Add</button>
          <img className='meal_img' alt='img' src={tomato} />
      </div>
      <div className='meals'>
          <p>Pizza</p>
          <button className='add_btn' onClick={addButtonHandler}>Add</button>
          <img className='meal_img' alt='img' src={pizza} />
      </div>
      <div className='meals'>
          <p>Burger</p>
          <button className='add_btn' onClick={addButtonHandler}>Add</button>
          <img className='meal_img' alt='img' src={burger} />
      </div> */}
    </>
  );
}

export default Meals;