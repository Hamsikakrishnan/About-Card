import React from "react"
import Img from "./components/Img"
import Names from "./components/Names"

export default function App(){
    return(
        <div className = "wrapper">
            <div className="cont">
                <Img />
                <Names />
            </div>
        </div>
        
    )
}