// alert("hello word")

//函数
functionTest(7) //调用函数

var rename = functionTest;//给函数换名字重新使用
rename("fsadfdsf");

/**
 * 定义函数
 * @param count
 */
function functionTest(count) {
    // for (var i = 1; i < 10; i++) {
    //     console.log("function test。。。")
    // }
    console.log(count)
}


var num=funcationSmartVar(1, 2, 3, 4)
console.log(num)
//动态参数
function funcationSmartVar() {   //参数不写，可支持arguments取默认参数，不指定参数个数

    var z = 0;
    for (var i = 0; i < arguments.length; i++) {
        z += arguments[i];
    }
    return z;
}