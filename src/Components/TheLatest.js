import React from 'react';
import './../../src/App.css';
import down2 from "./images/download2.jpg";




function TheLatest() {
   let myStyle ={
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'space-between'
    }

    return(
    <>
  <div className='container'>
    <h2 className='the-latest'>The Latest</h2>
    <div className='div1'></div>
    </div>
<div className='container' style= {myStyle}>
    <div className="card pepe" style={{width: "20rem", marginLeft: '30px'}}>
       <img src={down2} className="card-img-top" alt="download.jpg"/>
        <div className="card-body">
             <h5 className="card-title">Joshua Tree <br/> Overnight Adventure</h5>
               <p className="card-text">Gujrat is vastly understand and it's a mystry to us why the region isn't more well known as a tourist destination. It has a plethora of temples and palates.</p>
               {/* <a href="./" className="btn btn-primary">Go somewhere</a> */}
               <p><b> Travel</b> <span>/ August 21 2017</span></p>
        </div>
  </div>
  <div className="card" style={{width: "20rem", marginLeft: '50px'}}>
  <img src={down2} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Joshua Tree <br/> Overnight Adventure</h5>
    <p className="card-text">Gujrat is vastly understand and it's a mystry to us why the region isn't more well known as a tourist destination. It has a plethora of temples and palates.</p>
               {/* <a href="./" className="btn btn-primary">Go somewhere</a> */}
               <p><b> Travel</b> <span>/ August 21 2017</span></p>
  </div>
</div>
<div className="card" style={{width: "20rem", marginLeft: '50px'}}>
  <img src={down2} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Joshua Tree <br/> Overnight Adventure</h5>
    <p className="card-text">Gujrat is vastly understand and it's a mystry to us why the region isn't more well known as a tourist destination. It has a plethora of temples and palates.</p>
               {/* <a href="./" className="btn btn-primary">Go somewhere</a> */}
               <p><b> Travel</b> <span>/ August 21 2017</span></p>
  </div>
</div>

</div>
    </>
    );
  }



  export default TheLatest;