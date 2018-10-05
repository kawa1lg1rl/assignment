import React from "react";
import If from "./If.js"

export default class TodoList extends React.Component {
    state = {
        inputValue: "",
        todoArray: [], // todoValue, line
        filterList: ["all", "underline", "none"],
        selectedFilter: "all" // default
    }

    changeInputValue = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }


    addTodoList = (e) => {
        // add stodo list
        const { inputValue, todoArray } = this.state
        this.setState({
            todoArray: todoArray.concat({ todoValue: inputValue, line: false })
        })

        this.setState({
            inputValue: ""
        })

    }

    setLine = (i) => {
        const { todoArray } = this.state
        const tempArray = todoArray
        const temp = {
            todoValue: todoArray[i].todoValue,
            line: !todoArray[i].line
        }
        tempArray[i] = temp

        this.setState({
            todoArray: tempArray
        })
    }

    onKeyDown = (e) => {
        if (e.keyCode != 13) {
            return
        }

        this.addTodoList(e)
    }

    setFilter = (val) => {
        this.setState({
            selectedFilter: val
        })

    }

    render() {
        return (
            <div>
                <input placeholder="input your todo" value={this.state.inputValue} onChange={this.changeInputValue} onKeyDown={this.onKeyDown} />
                <button onClick={this.addTodoList} >add todo list</button>
                <br />
                {
                    this.state.filterList.map((a, i) => {
                        return (<div key={`div${i}`}><input key={`input div ${i}`} type="radio" onClick={() => this.setFilter(a)} value={a} name="filterSelect" />
                            <label key={`label${i}`}htmlFor={a}>{a}</label></div>)
                    })
                }
                { 
                    this.state.todoArray.map((todo, index) => {
                        const under = todo.line ? "underline" : "none"
                        const style = { textDecoration: under }
                        const filter = this.state.selectedFilter

                        return (<If key={index} condition={filter == under || filter == "all"}>
                            <div key={`todo${index}`} onClick={() => this.setLine(index)} style={style}>{`${index}. ${todo.todoValue}`}</div>
                        </If>)
                    })
                }
            </div>);

    }
}