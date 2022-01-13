import React from "react";
import "./../../src/App.css";
import mask1 from "./images/urnmask15.png";
import clap1 from "./images/urnclap.png";
import down2 from "./images/download2.jpg";
import shareIt from "./images/urnshare.png"
// import Footer from "./Footer";
import {Link} from "react-router-dom";
function ThirdPage() {
  let myStyle = {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "space-between",
  };
  return (
    <>
      <div className="container">
        <div className="ThirdPageHeading">
          <div className="HeadingLeftPart">
            <span className="ThirdPageThe">The</span>
            <span className="ThirdPageSiren">Siren</span>
          </div>
          <div className="HeadingRightPart">
            <button
              className="btn-outline-secondary"
              style={{ marginTop: "20px", color: "black" }}
            >
              {" "}
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        {/* Grid */}

        <div className="ThirdPageMainContainer">
          {/* Grid item1 */}
          <div className="firstBox">


               <div className="container" style={{height: "10%", width: "50%", marginTop: "150px"}}>
                <div className="clapimg"><img src={clap1} alt="clap1"/> <span style={{marginLeft: "20px"}}>9.3k claps</span> </div>
                <div className="shareimg"><img src={shareIt} alt="shareIt"/> <span style={{marginLeft: "20px"}}>9.3k claps</span></div>

               </div>




          </div>

          {/* Griditem2 */}
          <div className="secondBox">
            <div className="container">
              <h4 style={{ fontFamily: "serif" }}>
                {" "}
                <b> 5 Ways to animate a React App.</b>{" "}
              </h4>
              
              <div className="logologo">
                <div className="ThirdPageLeftSide ">
                  
                  <div div className="card mt-1 momo">
                    <div class="row g-0">
                      <div className="col-md-3">
                        <img
                          src={mask1}
                          className="img-fluid rounded-start mt-2"
                          alt="mask1"
                          // style={{ hight: "100%", width
                          // : "100%" }}
                        />
                      </div>
                      <div className="col-md-9">
                        <div className="card-body">
                          <h6
                            style={{ fontSize: "0.6rem", letterSpacing: "1" }}
                          >
                            <b> Demitry Nozhenko</b>
                          </h6>
                          {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                          <p
                            className="card-text  m-0 p-0"
                            style={{ fontSize: "0.6rem" }}
                          >
                            <small className="text-muted">
                              Jan 28 2019, 10mint read
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ThirdPageRightSide">
                  <div className="socialbox">
                    <span>
                      {" "}
                      <i
                        className="fa fa-facebook-square"
                        style={{ fontSize: "20px", color: "gray" }}
                      ></i>
                    </span>
                    <span>
                      {" "}
                      <i
                        className="fa fa-twitter-square"
                        style={{ fontSize: "20px", color: "gray" }}
                      ></i>
                    </span>
                    <span>
                      {" "}
                      <i
                        className="fa fa-telegram"
                        style={{ fontSize: "20px", color: "gray" }}
                      ></i>
                    </span>
                    <span>
                      {" "}
                      <i
                        className="fa fa-youtube-play"
                        style={{ fontSize: "20px", color: "gray" }}
                      ></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
             
               


            <div className="container">
              <div className="reactImage"> </div>
              <p className="aboutReact">
                {" "}
                A collection of animations that can be used with any inline
                style library that supports using objects to define keyframe
                animations, such as Radium or Aphrodite. React-animations
                implements all animations from animate. css. React-spring is a
                modern animation library that is based on spring physics. It's
                highly flexible and covers most animations needed for a user
                interface. react-spring inherits some properties from React
                Motion, such as ease of use, interpolation, and performance.
              </p>
              <p className="aboutReact"> Let's talk about them</p>
            </div>
            <div className="Imagescreenshot"> </div>
            <div className="butndiv">
              <span className="butonreact">
                <button className="butnreact">React</button>{" "}
              </span>
              <span className="butonreact">
                <button className="butnreact">Javascript</button>
              </span>
              <span className="butonreact">
                <button className="butnreact">Animation</button>
              </span>
            </div>
            <div style={{ marginLeft: "20px", marginTop: "30px" }}>
              <img src={clap1} alt="" />{" "}
              <span style={{ opacity: "0.75" }}>9.3k claps</span>{" "}
            </div>
            <div div className="card mt-1" style={{borderLeft: "none", borderRight: "none"}}>
              <div class="row g-0">
                <div className="col-md-3">
                  <img
                    src={mask1}
                    className="img-fluid rounded-start mt-2"
                    alt="mask1"
                    style={{ hight: "100%", width: "100%" }}
                  />
                </div>
                <div className="col-md-9">
                  <div className="card-body mt-4">
                    <h5 className="card-title" style={{ fontSize: "0.6rem" }}>
                      WRITTEN BY{" "}
                    </h5>
                    <h6 style={{ fontSize: "0.6rem", letterSpacing: "1" }}>
                      <b> Demitry Nozhenko</b>
                    </h6>
                    {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                    <p
                      className="card-text  m-0 p-0"
                      style={{ fontSize: "0.6rem" }}
                    >
                      <small className="text-muted">
                        Jan 28 2019, 10mint read
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Griditem3 */}

          <div className="thirdBox"></div>
        </div>
      </div>
      <div
        className="container"
        style={{ marginTop: "20px", marginBottom: "30px" }}
      >
        <h5>
          <b> More From The Siren </b>
        </h5>
      </div>
      <div className="container" style={myStyle}>
        <div className="card" style={{ width: "22rem", marginLeft: "30px" }}>
          <h6 style={{opacity: "0.65"}}>Also tagged React.js</h6>
          <img src={down2} className="card-img-top" alt="download.jpg" />
          <div className="card-body">
            <h5 className="card-title">
              Joshua Tree <br /> Overnight Adventure
            </h5>
            <div div className="card mt-2" style={{border: "none"}}>
                    <div class="row g-0">
                      <div className="col-md-3">
                        <img
                          src={mask1}
                          className="img-fluid rounded-start mt-2"
                          alt="mask1"
                          style={{ hight: "100%", width: "100%" }}
                        />
                      </div>
                      <div className="col-md-9">
                        <div className="card-body mt-4">
                          <h5 className="card-title" style={{ fontSize: "0.6rem" }}>WRITTEN BY </h5>
                          <h6
                            style={{ fontSize: "0.6rem", letterSpacing: "1" }}
                          >
                            <b> Demitry Nozhenko</b>
                          </h6>
                          {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                          <p
                            className="card-text  m-0 p-0"
                            style={{ fontSize: "0.6rem" }}
                          >
                            <small className="text-muted">
                              Jan 28 2019, 10mint read
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
          </div>

          

        </div>
        <div className="card" style={{ width: "22rem", marginLeft: "50px" }}>
        <h6 style={{opacity: "0.65"}}>Related reads</h6>
          <img src={down2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              Joshua Tree <br /> Overnight Adventure
            </h5>
            <div div className="card mt-2"  style={{border: "none"}}>
                    <div class="row g-0">
                      <div className="col-md-3">
                        <img
                          src={mask1}
                          className="img-fluid rounded-start mt-2"
                          alt="mask1"
                          style={{ hight: "100%", width: "100%" }}
                        />
                      </div>
                      <div className="col-md-9">
                        <div className="card-body mt-4">
                          <h5 className="card-title" style={{ fontSize: "0.6rem" }}>WRITTEN BY </h5>
                          <h6
                            style={{ fontSize: "0.6rem", letterSpacing: "1" }}
                          >
                            <b> Demitry Nozhenko</b>
                          </h6>
                          {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                          <p
                            className="card-text  m-0 p-0"
                            style={{ fontSize: "0.6rem" }}
                          >
                            <small className="text-muted">
                              Jan 28 2019, 10mint read
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
          </div>

         


        </div>
        <div className="card" style={{ width: "22rem", marginLeft: "50px" }}>
        <h6 style={{opacity: "0.65"}}>Related reads</h6>
          <img src={down2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              Joshua Tree <br /> Overnight Adventure
            </h5>
            <div div className="card mt-2"  style={{border: "none"}}>
                    <div class="row g-0">
                      <div className="col-md-3">
                        <img
                          src={mask1}
                          className="img-fluid rounded-start mt-2"
                          alt="mask1"
                          style={{ hight: "100%", width: "100%" }}
                        />
                      </div>
                      <div className="col-md-9">
                        <div className="card-body mt-4">
                          <h5 className="card-title" style={{ fontSize: "0.6rem" }}>WRITTEN BY </h5>
                          <h6
                            style={{ fontSize: "0.6rem", letterSpacing: "1" }}
                          >
                            <b> Demitry Nozhenko</b>
                          </h6>
                          {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                          <p
                            className="card-text  m-0 p-0"
                            style={{ fontSize: "0.6rem" }}
                          >
                            <small className="text-muted">
                              Jan 28 2019, 10mint read
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
          </div>

          

        </div>

         {/* <Footer/> */}


 {/* <footer> */}

 <div className="footer">
        <div className="all-pages"> 
            <p> <Link to={"./SecondPage.js"}><i className="fa fa-home" style={{fontSize: "30px"}}></i></Link><Link to={"./Home.js"} > <i className="fa fa-angle-left" style={{fontSize: "30px"}}></i> </Link>  2 of 7 <Link to={"./ThirdPage.js"}><i className="fa fa-angle-right" style={{fontSize: "30px"}}></i></Link></p>
        </div>

    </div>

    {/* </footer> */}
      </div>
     



    </>
  );
}

export default ThirdPage;
