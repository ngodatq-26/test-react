import React from "react";
import ArrowDown from "../arrow-down";
import ArrowUp from "../arrow-up";

const Order = () => {
    return (
        <div style={{display : "flex", flexDirection : "column", marginRight: "10px"}}>
            <div style={{marginBottom : "10px"}}><ArrowUp /></div>
            <div><ArrowDown /></div>
        </div>
    )
}

export default Order;

