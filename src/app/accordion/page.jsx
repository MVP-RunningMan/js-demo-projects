'use client'

import Item from './item/Item'
import styles from './page.module.css'

const page = () => {

  return (
    <div className={styles.container}>
      <Item />
      <Item />
      <Item />
    </div>
  )
}


export default page;