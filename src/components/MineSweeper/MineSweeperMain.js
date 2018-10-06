import React from "react";
import MineSweeperPlay from "./MineSweeperPlay";
import MineSweeperSettingPage from "./MineSweeperSettingPage";

export default class MineSweeperMain extends React.Component {

    state = {
        isGameStarted: false,
        width: 9,
        height: 9,
        mines: 27
        
    }

    render() {
        return (
            <div id="mineSweeperStart">
                <h1>MineSweeper</h1>
                {() => {
                    if(this.state.isGameStarted) {
                        return (<MineSweeperPlay />)
                    } else {
                        return (<MineSweeperSettingPage />)
                    }
                }}  
            </div>
        )
    }
}