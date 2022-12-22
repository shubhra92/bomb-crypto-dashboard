import React from "react";
import arrowUpCircleLogo from "../../../../assets/img/arrow-up-circle.svg";
import cartLogo from "../../../../assets/img/cart.svg";

const ArrowBtn = ({Label,  top, left, right, Logo, down, color}) => {
    
    const IStyle = {transform: (down?'rotate(-180deg)':0)}
    const position = left?{left}:{right}
    const CStyle = {top,...position,borderColor:color}
    return (
        <div className="common--arrowBtn" style={CStyle}>
            <label className="boardroom--rcom--deposit--btn--label" style={{color}}>{Label}</label>
            <img src={Logo||arrowUpCircleLogo} alt=""  style={IStyle}/>
        </div>
    )
}

const CartBtn = ({Label, top, left, right, color}) =>{
    return(
        <div>
            <ArrowBtn Logo={cartLogo} {...{Label, top, left, right, color}}/>
        </div>
    )
}
export { CartBtn };
export default ArrowBtn

