// 箭头函数不具备this 和arguments 
// 自己家没有this 就找上一级this 
// 如何更改 this 指向？
// call apply bind
// var that =this;
// => 

// 如何确定this指向什么？ 看谁调用就行  .前面是谁 this就是谁

// function a (b) { 
//     return b+1;
//  }

let a = b => b+1; //去掉fun 关键字  参数如果有一个 可以省略小括号 小括号和大括号之间有一个箭头 如果没有大括号 直接是返回值
//  console.log(a);

 function a1 (b1) { 
     return function (c) {
         return b1+c;
     }
  }

console.log(a1(1)(2));  
  //写成箭头函数

  let f = b1 => c=>b1+c;
  console.log(f(2)(3)); 

  let m= v =>  c=> v+c;
  console.log(m(4)(5));  //这个不叫闭包


  //闭包:函数执行的一瞬间叫闭包，（不销毁的作用域）当执行和返回的结果必须是引用数据类型，被外界变量接受，此时这个函数不会被销毁
  // 闭包作用：模块化
  let t =function (v) {
      return function (c) { 
          return v+c;
       }
    }();

[1,2,3].forEach(item=>console.log(item));

// 在Vue中很多时候不能用箭头函数
