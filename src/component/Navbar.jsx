import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartShopping, faBell, faCircleUser, faGlobe } from '@fortawesome/free-solid-svg-icons';

library.add(faCartShopping);
library.add(faBell);
library.add(faCircleUser);
library.add(faGlobe);

export default function Navbar(){
    return(
        <div className="navbar">
            <div className="logo">
                <a href="#!">
                    <FontAwesomeIcon className="fa-2x fa-thin" icon={faGlobe} />
                </a>
            </div>
            <div className="nav-links">
                <a href="#!">Home</a>
                <a href="#!">New Arrivals</a>
                <a href="#!">Best Selling</a>
                <a href="#!">Products</a>
                <a href="#!">
                    <FontAwesomeIcon className="fa-lg fa-thin" icon={faBell} />
                </a>
                <a href="#!">
                    <FontAwesomeIcon className="fa-lg fa-thin" icon={faCartShopping} />
                </a>
                <a href="#!">
                    <FontAwesomeIcon className="fa-lg fa-thin" icon={faCircleUser} />
                </a>
            </div>
        </div>
    )
}