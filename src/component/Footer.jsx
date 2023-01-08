import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebook);
library.add(faTwitter);
library.add(faInstagram);

export default function Footer(){
    return (
        <div class="footer">
            <a href="!#">Contact Us</a> |
            <a href="!#">Privacy Policy</a> |
            <a href="!#">Terms of Use</a>
            <div class="social-media">
                <a href="!#"><FontAwesomeIcon className='fa-2x' icon={faFacebook} /></a>
                <a href="!#"><FontAwesomeIcon className='fa-2x' icon={faTwitter} /></a>
                <a href="!#"><FontAwesomeIcon className='fa-2x' icon={faInstagram} /></a>
            </div>
        </div>
    );
}