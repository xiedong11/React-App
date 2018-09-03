import React, {Component} from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [
                'learn react',
                'learn react',
                'learn vue',
                'learn vue',
            ]
        }


    }

    render() {
        return (
            <div>
                <div>
                    <input/>
                    <button onClick={this.handleBthClick.bind(this)}>add</button>
                </div>
                < ul>
                    {
                        this.state.list.map((item,index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        );
    }

    handleBthClick() {
        //...展开运算符，包含list中的所有元素
        this.setState({
            list: [...this.state.list, "hello word"]
        })

    }

}

export default App;
