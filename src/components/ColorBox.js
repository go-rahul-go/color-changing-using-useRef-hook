import { useRef } from "react";
import "../style.css"

const ColorBox = ()=>{
    const box=useRef("");
    const para=useRef("")
    const colors=["red","green","indianred","purple","wheat"];

    const changeColor = ()=>{
        const random = Math.floor(Math.random() * colors.length)
        box.current.style.backgroundColor=colors[random];
        para.current.style.color="navy";
    }
    return(
        <div id="box" ref={box}>
            <button onClick={changeColor}>Click</button>
            <p ref={para}>useRef() used to handle DOM directly</p>
        </div>
    )
}


export default ColorBox;