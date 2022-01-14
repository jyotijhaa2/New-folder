import React from 'react'
import './../../src/App.css';
import {Link} from "react-router-dom";
//import Page2 from "./SecondPage";


 function Footer() {

    return (
        <>
            <div className="footer">
        <div className="all-pages"> 
            <p> <Link to={"./"}><i className="fa fa-home" style={{fontSize: "30px"}}></i></Link><Link to={"./ThirdPage"} > <i className="fa fa-angle-left" style={{fontSize: "30px"}}></i> </Link>  1 of 7 <Link to={./SecondPage}><i className="fa fa-angle-right" style={{fontSize: "30px"}}></i></Link></p>
        </div>

    </div>
        </>
    )
}
export default Footer;
