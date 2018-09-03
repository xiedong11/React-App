import React from 'react'

/**
 * 列表条目组件抽取
 */
class TodoItem extends React.Component {

    //父组件通过属性的形式向子组件传递参数,子组件通过props接受父组件传递过来的参数
    //子组件向父组件传值，是通过调用父组件提供的方法进行传值的
    render() {
        return (
            <div onClick={this.handleDelClick.bind(this, this.props.index)}>
                {this.props.contentStr}
            </div>
        )
    }

    handleDelClick(index) {
        // console.log(index)
        //调用父组件的删除方法
        this.props.delItem(index)
    }
}

export default TodoItem