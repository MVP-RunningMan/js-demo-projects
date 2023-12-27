//不手动设置样式,使用状态控制显示和隐藏
"use client";

import { useState } from "react";
import styles from "./item.module.css";

export const Item = () => {

  const [height, setHeight] = useState(0)

  return (
    <div className={styles.container}>
      <div className={styles.title} onClick={()=>{setHeight(height===0?200:0)}}>
        click me
      </div>
      <p className={styles.item} style={{height:`${height}px`}} >
        Email, of course, is the worst, because email is where work happens, and
        even if it’s not the work you should be doing right now it may well be
        work that’s easier to do than what you are doing now, and that means
        somehow you end up doing that work instead of whatever you are supposed
        to be working on now. And only then do you get back to what you should
        have been focusing on all along.
      </p>
    </div>
  );
};

export default Item;


//无法在第一次访问时获取样式
//当一个元素没有内联样式时，通过ref.current.style是无法直接获取到该元素的样式的。
//ref.current.style只能获取到内联样式（通过元素的style属性直接设置的样式），并不包括通过 CSS 样式表定义的样式。
//如果你想获取通过 CSS 样式表定义的样式，你可以使用window.getComputedStyle方法。这个方法返回一个表示元素在当前文档中计算后的样式对象，包含了所有的样式属性及其对应的值。

// "use client";

// import { useRef } from "react";
// import styles from "./item.module.css";

// export const Item = () => {
//   //使用ref获取dom节点
//   const ref = useRef();

//   const handleClick = () => {
//     //第一次访问ref.current.style.height得到的是空字符串
//     console.log(typeof ref.current.style.height);

//     ref.current.style.height =
//       ref.current.style.height === "" || ref.current.style.height === "0px"
//         ? "200px"
//         : "0px";
//     console.log(ref.current.style);
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.title} onClick={handleClick}>
//         click me
//       </div>
//       <p ref={ref} className={styles.item}>
//         Email, of course, is the worst, because email is where work happens, and
//         even if it’s not the work you should be doing right now it may well be
//         work that’s easier to do than what you are doing now, and that means
//         somehow you end up doing that work instead of whatever you are supposed
//         to be working on now. And only then do you get back to what you should
//         have been focusing on all along.
//       </p>
//     </div>
//   );
// };

// export default Item;


//设置内联样式,成功

// "use client";

// import { useRef } from "react";
// import styles from "./item.module.css";

// export const Item = () => {
//   const ref = useRef();

//   const handleClick = () => {
//     console.log(ref.current.style.height);

//     ref.current.style.height =
//     ref.current.style.height === "0px" ? "200px" : "0px";
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.title} onClick={handleClick}>
//         click me
//       </div>
//       <p ref={ref} className={styles.item} style={{height:"0px"}}>
//         Email, of course, is the worst, because email is where work happens, and
//         even if it’s not the work you should be doing right now it may well be
//         work that’s easier to do than what you are doing now, and that means
//         somehow you end up doing that work instead of whatever you are supposed
//         to be working on now. And only then do you get back to what you should
//         have been focusing on all along.
//       </p>
//     </div>
//   );
// };

// export default Item;