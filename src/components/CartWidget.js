import carrito from './Images/carrito1.png';


const cart = () => {

return (
<li className="nav-item px-3">
<img src={carrito} className="ml-5 pl-5" />  
<h7 className="pl-0 ml-0 fw-bold" id="display">
    0
  </h7>
</li>
)}

export default cart;