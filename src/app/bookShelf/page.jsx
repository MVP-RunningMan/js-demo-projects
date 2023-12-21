import styles from "./page.module.css";

const page = () => {
  const books = [
    { color: "blue", name: "斗破苍穹" },
    { color: "green", name: "武动乾坤" },
    { color: "orange", name: "大主宰" },
    { color: "#f1f1f1", name: "元尊" },
    { color: "red", name: "万相之王" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        {books.map((item, index) => (
          <div
            key={index}
            //jsx内使用模板字符串可以实现多个class名
            className={`${styles.every}`}
            style={{
              // 每一个元素比前一个元素的图层大1实现堆叠效果
              zIndex: index + 1,
              background: item.color,
              //每一个元素向右移动60px,实现交错效果
              left: `${(index + 1) * 60}px`,
            }}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
