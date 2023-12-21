'use client'

import styles from './page.module.css'

import { useState } from 'react'

const page = () => {

  const list = ["1","2","3","4"]

  return (
    <div class={styles.container}>
      {
        list.map((item)=>{
          return <div>{item}</div>
        })
      }
    </div>
  )
}

export default page