import React, {useState} from 'react';

function ColorChanger(){
    const [color, setColor] = useState("#FFFFFF")

function handleColor(event){
    setColor(event.target.value);
}
    return(
        <div className="main-container">
            <h1>Color-changer-app</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected color: {color}</p>
            </div>
            <label className='label'>Select a color:</label>
            <input type="color" value={color} onChange={handleColor}></input>
        </div>
    );
}
export default ColorChanger;