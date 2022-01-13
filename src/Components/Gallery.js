import React from 'react';
import './../../src/App.css';


function Gallery() {
    return (
        <>
        <div className='container'>
        <div className="main-container pepep">
            {/* 1 */}
            <div className='item first-part'>
                   <div className='item1-firstDiv'>
                     <div className='firstDivText'>
                       <p className='vertical-gallery'>Title of vertical gallery</p>
                       <p className='travel'>Travel/ August 21 2017</p>
                     </div>
                       
                 </div>
            </div>
            
            
            
                 {/* 2 */}
                  <div className='item second-part'>

                      <div className='item2-firstDiv'>
                          <div className='item2-firstDivText'>
                              <p>The Sound Cloud<br/>
                              You Loved The Doomed</p>
                          </div>
                          
                         </div>
                      
                      
                      
                      <div className='item2-secondDiv'> <div className='imeg'>

                      <div className='item2-firstDivText'>
                              <p>The Sound Cloud<br/>
                              You Loved The Doomed</p>
                          </div>
                          </div> 
                          </div>

                </div>
        </div>
        </div>
        </>
    )
}
export default Gallery;