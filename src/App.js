import { CartProvider } from 'react-use-cart';
import './App.css';
import Home from './Pages/Home/Home';
window.onload = () => {
  let navbar = document.querySelector('.navbar');

  document.querySelector('#menu-btn').onclick = () => {
    console.log('clicked');
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
  }

  let searchForm = document.querySelector('.search-form');

  document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
  }
  // document.findEl
  let cartItem = document.querySelector('.cart-items-container');

  document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
  }
  window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
  }

}


function App() {
  return (
    <div className="App">
      <CartProvider>
        <Home></Home>
      </CartProvider>
    </div>
  );
}

export default App;
