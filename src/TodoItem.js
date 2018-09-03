import React from 'react'

/**
 * 列表条目组件抽取
 */
class TodoItem extends React.Component {

    //父组件通过属性的形式向子组件传递参数
    //子组件通过props接受父组件传递过来的参数
    render() {
        return (
            <div>
                {this.props.contentStr}
            </div>
        )
    }
}

export default TodoItem