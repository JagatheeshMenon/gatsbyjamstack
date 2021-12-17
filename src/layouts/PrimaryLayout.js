import React from 'react'
import Header from "../components/Header"
import FooterMessage from "../components/FooterMessage"

export default function PrimaryLayout({children}){
    return(
        <div>
        <Header/>
                <div className="container">
                  <div className="row justify-content-md-center">
                        <div className="col-xs-6">
                            {children}
                        </div>
                    </div>
               </div>
        <FooterMessage/>
    </div>   
    )
}
