import React, { Component } from 'react'
import dataGlasses from "../DataGlasses/dataGlasses.json"





export default class Glasses extends Component {


    state = {
        firstGlass: {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
    };
    
    showGlasses = () => {
        return dataGlasses.map((glass, index) => {
            return (
                <div
                    style={{ cursor: "pointer" }}
                    className="col-2 m-3 p-2 border rounded"
                >
                    <img
                        onClick={() => {
                            this.changeGlasses(glass);
                        }}
                        key={index}
                        src={glass.url}
                        width="150px"
                        alt="...."
                    />
                </div>
            );
        });
    };
    
    changeGlasses = (glass) => {
        this.setState({
            firstGlass: glass,
        });
    };
    render() {
        return (
            <div>	<div
                style={{
                    backgroundImage: 'url("glassesImage/background.jpg")',
                    minHeight: "2000px",
                    width: "100%",
                }}
            >
                <div
                    style={{
                        backgroundColor: "rgba(32,32,32,0.5)",
                        minHeight: "2000px",
                    }}
                >
                    <h1
                        style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                        className="p-4 text-light"
                    >
                        TRY GLASSES APP ONLINE
                    </h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mt-4">
                                <div className="position-relative">
                                    <img
                                        className="position-absolute"
                                        src="glassesImage/model.jpg"
                                        alt=""
                                        width="250px"
                                    />
                                    <img
                                        style={{
                                            width: "150px",
                                            top: "75px",
                                            right: "120px",
                                            opacity: "0.9",
                                        }}
                                        className="position-absolute"
                                        src={this.state.firstGlass.url}
                                        alt=""
                                    />
                                    <div
                                        style={{
                                            backgroundColor: "rgba(255,140,0,0.5)",
                                            width: "250px",
                                            height: "105px",
                                            top: "200px",
                                            left: "318px",
                                        }}
                                        className="position-relative"
                                    >
                                        <p
                                            style={{ fontSize: "18px" }}
                                            className="text-left m-0 pl-3 pt-2 font-weight-bold text-primary"
                                        >
                                            {this.state.firstGlass.name}
                                        </p>
                                        <p
                                            style={{ fontSize: "14px" }}
                                            className="text-left m-0 pl-3 text-white"
                                        >
                                            {this.state.firstGlass.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-4">
                                <img src="glassesImage/model.jpg" alt="..." width="250px" />
                            </div>
                        </div>
                    </div>

                  
                    <div className="position-relative container bg-light mt-5 d-flex justify-content-center">
                        <div className="row">{this.showGlasses()}</div>
                    </div>
                </div>
            </div></div>
        )
    }
}
