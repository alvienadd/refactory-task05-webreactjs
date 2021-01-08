import React from 'react';
import classes from 'parts/Header.css';
import classesbs from 'parts/bootstrap.css';

import img1 from 'assets/img/person/mask.png';


export default function Teams() {
    return(
        <section className="designer p-5">
        <div className="container">
            <div className="row mb-3">
                <div className="col">
                    <h3 style={{fontFamily:'Poppins',fontWeight:'bold',fontSize:42}}># Our Teams</h3>
                    <p className="pl-5" style={{fontFamily:'Arial',fontSize:20}}>Get Best Consultation from Our Teams</p>
                </div>
            </div>
            <div className="row">
                <div className="col-6 col-sm-3 text-center">
                    <figure className="figure">
                        <img src={img1} className="figure-img img-fluid" style={{borderRadius:200,height:180}}/>
                        <figcaption className="figure-caption text-center">
                            <h5 style={{fontSize:28,marginBottom:10}}>Alvien</h5>
                            <p style={{fontSize:22}}>Web Developer</p>
                        </figcaption>
                      </figure>
                </div>
                <div className="col-6 col-sm-3 text-center">
                    <figure className="figure">
                        <img src={img1} className="figure-img img-fluid" style={{borderRadius:200,height:180}}/>
                        <figcaption className="figure-caption text-center">
                            <h5 style={{fontSize:28,marginBottom:10}}>Alvien</h5>
                            <p style={{fontSize:22}}>Web Developer</p>
                        </figcaption>
                      </figure>
                </div>
                <div className="col-6 col-sm-3 text-center">
                    <figure className="figure">
                        <img src={img1} className="figure-img img-fluid" style={{borderRadius:200,height:180}}/>
                        <figcaption className="figure-caption text-center">
                            <h5 style={{fontSize:28,marginBottom:10}}>Alvien</h5>
                            <p style={{fontSize:22}}>Web Developer</p>
                        </figcaption>
                      </figure>
                </div>
                <div className="col-6 col-sm-3 text-center">
                    <figure className="figure">
                        <img src={img1} className="figure-img img-fluid" style={{borderRadius:200,height:180}}/>
                        <figcaption className="figure-caption text-center">
                            <h5 style={{fontSize:28,marginBottom:10}}>Alvien</h5>
                            <p style={{fontSize:22}}>Web Developer</p>
                        </figcaption>
                      </figure>
                </div>
            </div>
        </div>
    </section>
    )
}