import React from 'react';
import './../../src/App.css';
import down1 from "./images/download1.jpg";
import downArrow from "./images/arrow.png"




function LatestArticles() {
    return (
        
   <>
     <div className='container'>
        <h2 className='the-latest'>Latest Articles</h2>
        <div className='div1'></div>
     </div> 
                     {/* Gride view */}
   <div className='container'>
        <div className="main-container">
            {/* 1 */}
            <div className='item first-part'>
                   {/* <div className='item1-firstDiv'>
                       <p className='vertical-gallery'>Title of vertical gallery</p>
                       <p className='travel'>Travel/ August 21 2017</p>
                        </div> */}
                             <div style={{marginLeft: "20px"}}>
<div className="card mb-3" style={{maxWidth: '550px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={down1} style={{height:"100%"}} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Catch waves with<br/> an adventure guide.</h5>
        <p className="card-text">Gujrat is vastly understand and it's a mystry to us why the region isn't more well- 
        {/* known as a tourist destination. It has a plethora of temples and palates. */}
        </p>
        <p className="card-text"><small className="text-muted"><b>Travel</b> <span>/ August 21 2017</span></small></p>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3" style={{maxWidth: '550px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={down1} style={{height:"100%"}} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Catch waves with<br/> an adventure guide.</h5>
        <p className="card-text">Gujrat is vastly understand and it's a mystry to us why the region isn't more well- 
        {/* known as a tourist destination. It has a plethora of temples and palates. */}
        </p>
        <p className="card-text"><small className="text-muted"><b>Travel</b> <span>/ August 21 2017</span></small></p>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3" style={{maxWidth: '550px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={down1} style={{height:"100%"}} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Catch waves with<br/> an adventure guide.</h5>
        <p className="card-text">Gujrat is vastly understand and it's a mystry to us why the region isn't more well- 
        {/* known as a tourist destination. It has a plethora of temples and palates. */}
        </p>
        <p className="card-text"><small className="text-muted"><b>Travel</b> <span>/ August 21 2017</span></small></p>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3" style={{maxWidth: '550px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={down1} style={{height:"100%"}} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Catch waves with<br/> an adventure guide.</h5>
        <p className="card-text">Gujrat is vastly understand and it's a mystry to us why the region isn't more well- 
        {/* known as a tourist destination. It has a plethora of temples and palates. */}
        </p>
        <p className="card-text"><small className="text-muted"><b>Travel</b> <span>/ August 21 2017</span></small></p>
      </div>
    </div>
  </div>
</div>
                             </div>
                        <div className='load-more'> <img src={downArrow }  alt="..."/><span style={{marginLeft: "20px"}}>LOAD MORE</span></div>
                  
                        <div className='divimage2'></div>




                  </div>
            
            
            
                 {/* 2 */}
                  <div className='item second-part'>

                      {/* <div className='item2-firstDiv'></div>
                      <div className='item2-secondDiv'></div> */}
                      <div className='advertistement'>
                            <p className='Advertiste-Ment'>Advertistement</p>
                      </div>
                      <div className='container'>
                             <h2 className='the-latest'>Top Posts</h2>
                                <div className='div1'> </div>
                      </div>
                      <div className='divimage'> </div>
                          <h3>Catch waves with<br/> an adventure guide.<span class="badge badge1">1</span></h3>
                          <p><small className="text-muted"><b>Travel</b> <span>/ August 21 2017</span></small></p>
                          <div>
<div className="card mb-3" style={{maxWidth: '450px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={down1} style={{height:"100%"}} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <h5 className="card-title">Catch waves with<br/> an adventure guide.<span class="badge badge2">2</span></h5>
        {/* <p className="card-text">Gujrat is vastly understand and it's a mystry to us why the region isn't more well known as a tourist destination. It has a plethora of temples and palates.</p> */}
        <p className="card-text"><small className="text-muted"><b>Travel</b> <span>/ August 21 2017</span></small></p>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3" style={{maxWidth: '450px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={down1} style={{height:"100%"}} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <h5 className="card-title">Catch waves with<br/> an adventure guide.<span class="badge badge2">3</span></h5>
        {/* <p className="card-text">Gujrat is vastly understand and it's a mystry to us why the region isn't more well known as a tourist destination. It has a plethora of temples and palates.</p> */}
        <p className="card-text"><small className="text-muted"><b>Travel</b> <span>/ August 21 2017</span></small></p>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3" style={{maxWidth: '450px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={down1} style={{height:"100%"}} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <h5 className="card-title">Catch waves with<br/> an adventure guide.<span class="badge badge2">4</span></h5>
        {/* <p className="card-text">Gujrat is vastly understand and it's a mystry to us why the region isn't more well known as a tourist destination. It has a plethora of temples and palates.</p> */}
        <p className="card-text"><small className="text-muted"><b>Travel</b> <span>/ August 21 2017</span></small></p>
      </div>
    </div>
  </div>
</div>

                 </div>
                </div>
        </div>










    </div>

  </>
    )
}
export default LatestArticles;