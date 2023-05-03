import React, {useState} from 'react'

export default function FontSize(){
    let [size, setSize] = useState(16)
    let [color, setColor] = useState()

    const onClickUpSize = () => {  
        setSize(size + 1)
    }
    const onClickDownSize = () => {
        if (size > 0){
            setSize(size - 1)
        }
    }
    const onClickColor = (ev) => {  
        let c = ev.target.innerText
        setColor(c)
    }
    const dStyle = {
        fontSize: size,
        color: color
    }

    return(
        <div>
            <div style={dStyle}>ขนาด Font Size : {size}</div>
            <button onClick={onClickUpSize}>เพิ่ม Size</button>
            <button onClick={onClickDownSize}>ลด Size</button><br/>
            <button onClick={onClickColor}>red</button>
            <button onClick={onClickColor}>green</button>
            <button onClick={onClickColor}>blue</button>
        </div>
    )
}