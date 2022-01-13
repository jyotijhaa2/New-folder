import React from "react";
import "./../../src/App.css";
// import down5 from "./images/CC48.jpg";

function LatestStories()  {
  // let myStyle ={
  //      display: 'flex',
  //      flexWrap: 'wrap',
  //      alignContent: 'space-between'
  //  }

   return(
   <>
 <div className='container'>
   <h2 className='the-latest'>The Latest</h2>
   <div className='div1'></div>
{/* card start */}

<div>
<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card">
      {/* <img src="..." className="card-img-top" alt="..."/> */}
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      {/* <img src="..." className="card-img-top" alt="..."/> */}
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      {/* <img src="..." className="card-img-top" alt="..."/> */}
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
</div>
  
</div>
{/* cadr    end */}

   </div>


{/* LatestStories */}


<div className='container'>
   <h2 className='the-latest'>The Latest</h2>
   <div className='div1'></div>
{/* card start */}

<div>
<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card">
      {/* <img src="..." className="card-img-top" alt="..."/> */}
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      {/* <img src="..." className="card-img-top" alt="..."/> */}
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      {/* <img src="..." className="card-img-top" alt="..."/> */}
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
</div>
  
</div>
{/* cadr    end */}

   </div>



{/* LatestStories */}



   </>
   );
 }



<div className="card" style={{width: "20rem", marginLeft: '50px'}}>
 {/* <img src={down2} className="card-img-top" alt="..."/> */}
 <div className="card-body">
   <h5 className="card-title">Joshua Tree <br/> Overnight Adventure</h5>
   <p className="card-text">Gujrat is vastly understand and it's a mystry to us why the region isn't more well known as a tourist destination. It has a plethora of temples and palates.</p>
              {/* <a href="./" className="btn btn-primary">Go somewhere</a> */}
              <p> Travel <span>/ August 21 2017</span></p>
 </div>
</div>




export default LatestStories;
