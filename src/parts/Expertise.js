import React from 'react';
import classes from 'parts/Header.css';
import classesbs from 'parts/bootstrap.css';

import img1 from 'assets/img/expertise/reactjs.png';
import img2 from 'assets/img/expertise/materialize.png';
import img3 from 'assets/img/expertise/flutter.png';
import img4 from 'assets/img/expertise/b4a.png';
import img5 from 'assets/img/expertise/csharp.png';
import img6 from 'assets/img/expertise/vba.png';

export default function Expertise() {
    return(
        <section className="features p-5">
        <div className="container">
            <div className="row mb-3">
                <div className="col">
                    <h3 style={{fontFamily:'Poppins',fontWeight:'bold',fontSize:42}}># Expertise</h3>
                    <p className="pl-5" style={{fontFamily:'Arial',fontSize:20}}>Expertise in Web, Mobile And Desktop</p>
                </div>
            </div>

            <div className="row pt-5">
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <figure className="figure">
                        <div className="figure-img">
                            <div style={{backgroundColor:'#ABABAB',height:165, display:'flex',flex:1,alignItems:'center',justifyContent:'center'}}>
                                <a href="" className="d-flex justify-content-center">
                                    <img src={img1} className="align-self-center"/>
                                </a>
                            </div>
                        </div>
                        <figcaption className="figure-caption text-center">
                            <h5 style={{fontSize:28,marginBottom:10}}>React JS</h5>
                            <p style={{fontSize:22}}>Website</p>
                        </figcaption>
                      </figure>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <figure className="figure">
                        <div className="figure-img">
                             <div style={{backgroundColor:'#ABABAB',height:165, display:'flex',alignItems:'center',justifyContent:'center'}}>
                                <a href="" className="d-flex justify-content-center">
                                    <img src={img2} className="align-self-center"/>
                                </a>
                            </div>
                        </div>
                        <figcaption className="figure-caption text-center">
                          <h5 style={{fontSize:28,marginBottom:10}}>Materialize</h5>
                          <p style={{fontSize:22}}>Website</p>
                        </figcaption>
                      </figure>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <figure className="figure">
                        <div className="figure-img">
                        <div style={{backgroundColor:'#ABABAB',height:165, display:'flex',alignItems:'center',justifyContent:'center'}}>
                                <a href="" className="d-flex justify-content-center">
                                    <img src={img3} className="align-self-center"/>
                                </a>
                            </div>
                        </div>
                        <figcaption className="figure-caption text-center">
                        <h5 style={{fontSize:28,marginBottom:10}}>Flutter</h5>
                        <p style={{fontSize:22}}>Mobile Apps</p>
                        </figcaption>
                      </figure>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <figure className="figure">
                        <div className="figure-img">
                            <div style={{backgroundColor:'#ABABAB',height:165, display:'flex',flex:1,alignItems:'center',justifyContent:'center'}}>
                                <a href="" className="d-flex justify-content-center">
                                    <img src={img1} className="align-self-center"/>
                                </a>
                            </div>
                        </div>
                        <figcaption className="figure-caption text-center">
                            <h5 style={{fontSize:28,marginBottom:10}}>React JS</h5>
                            <p style={{fontSize:22}}>Website</p>
                        </figcaption>
                      </figure>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <figure className="figure">
                        <div className="figure-img">
                             <div style={{backgroundColor:'#ABABAB',height:165, display:'flex',alignItems:'center',justifyContent:'center'}}>
                                <a href="" className="d-flex justify-content-center">
                                    <img src={img2} className="align-self-center"/>
                                </a>
                            </div>
                        </div>
                        <figcaption className="figure-caption text-center">
                          <h5 style={{fontSize:28,marginBottom:10}}>Materialize</h5>
                          <p style={{fontSize:22}}>Website</p>
                        </figcaption>
                      </figure>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <figure className="figure">
                        <div className="figure-img">
                        <div style={{backgroundColor:'#ABABAB',height:165, display:'flex',alignItems:'center',justifyContent:'center'}}>
                                <a href="" className="d-flex justify-content-center">
                                    <img src={img3} className="align-self-center"/>
                                </a>
                            </div>
                        </div>
                        <figcaption className="figure-caption text-center">
                        <h5 style={{fontSize:28,marginBottom:10}}>Flutter</h5>
                        <p style={{fontSize:22}}>Mobile Apps</p>
                        </figcaption>
                      </figure>
                </div>

            </div>
        </div>
    </section>
    )
}