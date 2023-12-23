'use client'

import styles from './page.module.css'
import {useState}  from 'react'

const page = () => {

  const [height, setHeight] = useState(0);

  const changeHeight = (event)=>{

    if (event.deltaY > 0 && height<100) {
      // 向下滚动
      setHeight(100);
    } else if (event.deltaY < 0 && height>0) {
      // 向上滚动
      setHeight(0);
    }
  }
  return (
    <div className={styles.container} onWheel={changeHeight}>
      <div className={styles.item1}></div>
      <div style={{ height: `${height}vh`,transition:"height 0.5s linear"}} className={styles.item2}></div>
    </div>
  );
}
export default page;



//第一版 通过同时改变两个div高度,达到效果

// 'use client'

// import styles from './page.module.css'
// import {useState}  from 'react'

// const page = () => {

//   const [aheight, setaHeight] = useState(100);
//   const [bheight, setbHeight] = useState(0);

//   const changeHeight = (event)=>{

//     console.log(event.deltaY)
//     if (event.deltaY > 0 && bheight<100) {
//       // 向下滚动
//       setaHeight((prevHeight) => prevHeight - 5);
//       setbHeight((prevHeight) => prevHeight + 5);
//     } else if (event.deltaY < 0 && aheight<100) {
//       console.log(aheight)
//       // 向上滚动
//       setaHeight((prevHeight) => prevHeight + 5);
//       setbHeight((prevHeight) => prevHeight - 5);
//     }
//   }
//   return (
//     <div className={styles.container} onWheel={changeHeight}>
//       <div style={{ height: `${aheight}vh`}} className={styles.item1}></div>
//       <div style={{ height: `${bheight}vh`}} className={styles.item2}></div>
//     </div>
//   );
// }
// export default page;

//优化,使用一个状态
// 'use client'

// import styles from './page.module.css'
// import {useState}  from 'react'

// const page = () => {

//   const list = [1,2,3,4,5]

//   let i = 0;

//   const [height, setHeight] = useState(100);

//   const changeHeight = (event)=>{

//     if(height === 0){

//     }

//     if (event.deltaY > 0 && height>0) {
//       // 向下滚动
//       setHeight((prevHeight) => prevHeight - 5);
//     } else if (event.deltaY < 0 && height<100) {
//       // 向上滚动
//       setHeight((prevHeight) => prevHeight + 5);
//     }
//   }
//   return (
//     <div className={styles.container} onWheel={changeHeight}>
//       <div style={{ height: `${height}vh`}} className={styles.item1}></div>
//       <div style={{ height: `${100-height}vh`}} className={styles.item2}></div>
//     </div>
//   );
// }
// export default page;

//第二版 底部div固定,通过z-index将下一张元素覆盖在上方
// 'use client'

// import styles from './page.module.css'
// import {useState}  from 'react'

// const page = () => {

//   const [height, setHeight] = useState(0);

//   const changeHeight = (event)=>{

//     if (event.deltaY > 0 && height<100) {
//       // 向下滚动
//       setHeight((prevHeight) => prevHeight + 5);
//     } else if (event.deltaY < 0 && height>0) {
//       // 向上滚动
//       setHeight((prevHeight) => prevHeight - 5);
//     }
//   }
//   return (
//     <div className={styles.container} onWheel={changeHeight}>
//       <div className={styles.item1}></div>
//       <div style={{ height: `${height}vh`}} className={styles.item2}></div>
//     </div>
//   );
// }
// export default page;



//优化 加上动画,一步到位
// 'use client'

// import styles from './page.module.css'
// import {useState}  from 'react'

// const page = () => {

//   const [height, setHeight] = useState(0);

//   const changeHeight = (event)=>{

//     if (event.deltaY > 0 && height<100) {
//       // 向下滚动
//       setHeight(100);
//     } else if (event.deltaY < 0 && height>0) {
//       // 向上滚动
//       setHeight(0);
//     }
//   }
//   return (
//     <div className={styles.container} onWheel={changeHeight}>
//       <div className={styles.item1}></div>
//       <div style={{ height: `${height}vh`,transition:"height 0.5s linear"}} className={styles.item2}></div>
//     </div>
//   );
// }
// export default page;
