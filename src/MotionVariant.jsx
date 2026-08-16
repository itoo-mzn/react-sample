import { useState } from "react";
import { motion } from "motion/react";

export default function MotionVariant() {
  const [active, setActive] = useState(true);

  // variantsというアニメーション情報をオブジェクト形式で管理する仕組みを使う
  const panel = {
    active: { opacity: 1, scale: 1 },
    disable: { opacity: 0.3, scale: 0.8 },
  };

  return (
    <>
      <button onClick={() => setActive((act) => !act)}>Click</button>
      <motion.div
        variants={panel}
        animate={active ? "active" : "disable"}
        style={{ width: "350px", height: "200px", backgroundColor: "#90ee90" }}
      >
        テキスト
      </motion.div>
    </>
  );
}
