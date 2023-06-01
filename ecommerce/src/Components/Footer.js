import React from 'react';
/* import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; */

function Footer(props) {
    return (
        <footer class="footer-distributed">

        <div class="footer-left">
            <h3>Shopping Cart<span></span></h3>

            

            {/* <p class="footer-company-name">Copyright © 2021 <strong>Ecommerce</strong> All rights reserved</p> */}
        </div>

        <div class="footer-center">
            <div>
                <i class="fa fa-map-marker"></i>
                <a href='#' style={{color: "white"}}>Home</a>
				<br/> <br/>
				<a href='#'style={{color: "white"}}>Shop</a>
				<br/><br/>
				<a href='#'style={{color: "white"}}>product</a>
				<br/><br/>
				<a href='#'style={{color: "white"}}>logout</a>
            </div>
        </div>
        <div class="footer-right">
            <p class="footer-company-about">
                <span>About the company</span>
                <strong>Shopping Cart</strong> 
            </p>
            <div class="footer-icons">
                {/* <a href="#"><i><FacebookIcon/></i></a>
                <a href="#"><i><TwitterIcon/></i></a>
                <a href="#"><i><InstagramIcon/></i></a>
                <a href="#"><i><LinkedInIcon/></i></a> */}
            </div>
        </div>
    </footer>
    );
}

export default Footer;