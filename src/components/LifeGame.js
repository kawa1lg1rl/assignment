import React from "react";

export default class LifeGame extends React.Component {
    state = {
        cellsSize: "",
        cells: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
        isStart: false,
        gameStart: null
    }

    onChangeCellsSize = (e) => {
        this.setState({
            cellsSize: e.target.value
        })
    }

    onKeyDown = (e) => {
        if (e.keyCode != 13) {
            return
        }
        this.createCells(this.state.cellsSize)
    }

    createCells = (size) => {
        let newCells = []
        for (let i = 0; i < size; i++) {
            let tempCells = []
            for (let j = 0; j < size; j++) {
                tempCells.push(0)
            }
            newCells.push(tempCells)

        }

        this.setState({ cells: newCells })
    }

    onClickCell = (e) => {
        let color = e.target.style.backgroundColor
        let posit = e.target.id.split("-")

        let x = posit[0]
        let y = posit[1]

        let tempCells = this.state.cells
        tempCells[y][x] = (tempCells[y][x] == 1) ? 0 : 1;

        this.setState({
            cells: tempCells
        })

        // e.target.style.backgroundColor = (color == "black") ? "white" : "black"
    }

    isCellAlive = (y, x) => {
        return !!this.state.cells[y][x]
    }

    isCellwillBeAlive = (cells, y, x) => {
        let len = cells.length

        let startX = x - 1 < 0 ? 0 : x - 1
        let startY = y - 1 < 0 ? 0 : y - 1
        let endX = x + 1 >= len ? len - 1 : x + 1
        let endY = y + 1 >= len ? len - 1 : y + 1

        let aliveCells = 0

        for (let tempX = startX; tempX <= endX; tempX++) {
            for (let tempY = startY; tempY <= endY; tempY++) {
                if (tempX == x && tempY == y) continue
                if (this.isCellAlive(tempY, tempX)) {
                    aliveCells++
                }
            }
        }
        if (aliveCells == 3) {
            return true
        }
        else if (this.isCellAlive(y, x) && aliveCells == 2 || aliveCells == 3) {
            return true
        } else {
            return false
        }
    }

    next = (e) => {

        console.log(1)
        const { cells } = this.state
        let tempCells = this.state.cells

        cells.map((line, y) => {
            line.map((cell, x) => {
                if (this.isCellwillBeAlive(tempCells, y, x)) {
                    tempCells[y][x] = 1
                } else {
                    tempCells[y][x] = 0
                }
            })
        })

        this.setState({
            cells: tempCells
        })

    }

    start = (e) => {
        if (this.state.gameStart != null) return

        let game = setInterval(() => {
            this.next(e)
        }, 1000)

        this.setState({
            gameStart: game
        })
    }

    stop = (e) => {
        if (this.state.gameStart == null) return
        clearInterval(this.state.gameStart)
        this.setState({
            gameStart: null
        })
    }

    reset = (e) => {
        this.createCells(5)
    }

    render() {
        return (
            <div>
                <h1>Game of Life</h1>
                <div className="board">
                    <br />
                    {this.state.cells.map((cells, y) => {
                        return (<div key={y} className="line">
                            {cells.map((cell, x) => {
                                let color = (this.state.cells[y][x] == 1) ? "black" : "white"
                                let style = { backgroundColor: color }

                                return <div className="cell" key={`${x}-${y}`} id={`${x}-${y}`}
                                    onClick={this.onClickCell} style={style} />
                            })} </div>)
                    })}
                    <br />
                    <div id="buttons">
                        <button id="nextButton" onClick={this.next}>next</button>
                        <button id="startButton" onClick={this.start}>start</button>
                        <button id="stopButton" onClick={this.stop}>stop</button>
                        <button id="resetButton" onClick={this.reset}>reset</button>
                    </div>
                    <input style={{ display: "block" }} type="text" id="cellSize"
                        value={this.state.cellsSize} placeholder="input cells size"
                        onKeyDown={this.onKeyDown} onChange={this.onChangeCellsSize} />
                </div>

            </div>)
    }
}