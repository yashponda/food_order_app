// Components
import Meals from './Meals';
// Styles
import '../Styles/App.css';
import '../Styles/Body.css';
//Assets
import '../../src/Assets/download3.jpg'

function Body() {
  return (
    <>
     <div className='main_body'>
        <Meals />
     </div>
    </>
  );
}

export default Body;