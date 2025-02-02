import { NavLink } from "react-router"
import Dropdown from "./dropdown"
import { PiShoppingCartDuotone } from "react-icons/pi";
import { useSelector } from "react-redux";
function Navbar() {
    const{totalQuantity}=useSelector(state=>state.shoppingCart)
    return(
    <nav>
    <div className="container">
        logo
    </div>
    <ul>
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/">Product</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li>
            {
                totalQuantity>0 &&(
                    <div className="tracker">{totalQuantity}</div>
                )
            }
        <Dropdown>
            <PiShoppingCartDuotone/>
        </Dropdown>
        </li>
    </ul>
    </nav>
    )
}
export default Navbar