"use client";

import { useRef } from "react";
import styles from "./item.module.css";

export const Item = () => {
  //使用ref获取dom节点
  const ref = useRef();

  const handleClick = () => {
    //第一次访问ref.current.style.height得到的是空字符串
    console.log(typeof ref.current.style.height);

    ref.current.style.height =
      ref.current.style.height === "" || ref.current.style.height === "0px"
        ? "200px"
        : "0px";
    console.log(ref.current.style);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title} onClick={handleClick}>
        click me
      </div>
      <p ref={ref} className={styles.item}>
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
