import axios from "axios";
import React from "react";

function Counteries(){
   var x= axios.get("https://restcountries.com/v3/all").then((res)=>{
        console.log(res.data)
    }).catch(()=>{})
    return(
        <div className="mybox">
            <h3>Counteries</h3>
            
        </div>
    )
}

export default Counteries