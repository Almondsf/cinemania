import Image from "next/image";
import { useState } from "react";
import styles from "./card.module.css";
import { motion } from "framer-motion";
import cls from "classnames";

const Card = ({
  imgUrl = "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  size = "medium",
  id,
}) => {
  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };
  const [imgSrc, setImgSrc] = useState(imgUrl);
  const handleOnError = () => {
    console.log("hi error");
    setImgSrc(
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    );
  };
  const scale = id === 0 ? { scaleY: 1.1 } : { scale: 1.1 };
  return (
    <div className={styles.container}>
      <motion.div
        className={cls(styles.imgMotionWrapper, classMap[size])}
        whileHover={{ ...scale }}
      >
        <Image
          src={imgSrc}
          alt="movie overview"
          layout="fill"
          className={styles.cardImg}
          onError={handleOnError}
        />
      </motion.div>
    </div>
  );
};
export default Card;
