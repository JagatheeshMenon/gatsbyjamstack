import React, { Component } from 'react'
import {navigate} from 'gatsby'
import Header from "../components/Header"
import FooterMessage from "../components/FooterMessage"


export default class aboutme extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Header/>
                    <h1> About me Page</h1>
                    <button onClick={()=>navigate("/")}>Back to home page</button>
                </div>
                <FooterMessage/>                
            </div>
        );
    }
}
