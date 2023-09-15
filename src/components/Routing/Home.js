import React from "react";
import { useNavigate } from "react-router-dom";

function Home(){
    const navigate = useNavigate()
    return (
        <>
    <h2><b>Welcome to Ksolves India Ltd.</b></h2> 
    <button onClick={()=>{navigate("order-summary")}}>Place Order</button>  
    </>
    ) 
}
export default Home;