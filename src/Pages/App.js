import ReactDOM from "react-dom/client";
import './App.css';
import mimage from './mainImage.JPEG';
import Logo from './Logo.png';
import placeholder from './placeholder.png'
import { Outlet, Link } from "react-router-dom"


function App() {
  return (
    <div className="App">

      <nav>
      <ul>
        <li className="list1"><a className="home" href="#home">Home</a></li>
        <li className="list1">
          
          <a className="shop">Shop</a>
        
          </li>
        <li className="list1"><a className="about" href="#contact">About us</a></li>
        <li className="list1"><a className="contact" href="#about">Contact</a></li>
        <li className="list5"><img src={Logo} className="logo" /></li>
        <li className="list4"><a className="hamburger" href="#about"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg></a></li>
        <li className="list2"><a className="cart" href="#about"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
</svg></a></li>
<li className="list2"><a className="search" href="#contact"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></a></li>
<li className="list2"><a className="rig" href="#home">Register</a></li>
        <li className="list3"><a>/</a></li>
        <li className="list2"><a className="sign" href="#home">Sign in</a></li>
        
      </ul>
      </nav>
      
      
      


      <img src={mimage} alt="Main Image" className="mainImage" />


      <div className="imageContainer"></div>
      <div className="itemContainer">
      <div className="center">
      <img src={placeholder} alt="placeholder" className="placeholder" />
      </div>
      <img src={placeholder} alt="placeholder" className="placeholder" />
      </div>
      <div className="itemContainer">
      <div className="center">
      <img src={placeholder} alt="placeholder" className="placeholder" />
      </div>
      <img src={placeholder} alt="placeholder" className="placeholder" />
      </div>
      <div className="itemContainer">
      <div className="center">
      <img src={placeholder} alt="placeholder" className="placeholder" />
      </div>
      <img src={placeholder} alt="placeholder" className="placeholder" />
      </div>


    </div>





  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;