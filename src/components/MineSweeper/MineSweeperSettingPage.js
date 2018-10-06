import React from "react";

export default class MineSweeperMain extends React.Component {
    
changeHeight = (e) => {
    
}
    
changeWidth = (e) => {
    
}
    
changeMines = (e) => {
    
}

    render() {
        return (
            <div id="mineSweeperSettingPage">
                <div>height : </div><input value="9" onChange={this.changeHeight} id="heightInput"/> 
                <div>widht  : </div><input value="9" onChange={this.changeWidth} id="widthInput"/>
                <div>mines  : </div><input value="27" onChange={this.changeMines} id="minesInput"/>
                <button id="startButton" onClick={this.clickStartButton}>Game Start</button>
            </div>
        )
    }
}