import React, {Component} from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            inputValue: ''
        }
    }

    render() {
        return (
            <div>
                <div>
                    <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
                    <button onClick={this.handleBthClick.bind(this)}>add</button>
                </div>
                < ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>
                        })
                    }
                </ul>
            </div>
        );
    }

    handleBthClick() {
        //...展开运算符，包含list中的所有元素
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: "" //完成输入之后，情况输入框内容
        })

    }


    handleInputChange(e) {
        // console.log(e.target.value)
        this.setState({
            inputValue: e.target.value
        })
    }

    handleItemClick(pos) {
        // console.log(pos)
        const list = [...this.state.list]
        list.splice(pos, 1) //从pos开始，删除n个元素
        this.setState({
            list: list
        })
    }
}

export default App;
