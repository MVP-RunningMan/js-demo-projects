'use client'

import {useState} from 'react'

import styles from './page.module.css'


//当文本高度超过容器高度时,获取textarea的scrollHeight,赋给textarea,注意可能有padding
const page = () => {

  //收集textarea滚动条高度
  const [height, setHeight] = useState("100px")

  return (
    <div className={styles.container}>
        {/* 当内容改变时,将滚动条高度赋值给textarea */}
        <textarea className={styles.text} style={{height:height}} onChange={(e)=>{setHeight(e.target.scrollHeight + 'px')}} />
    </div>
  )
}


export default page;