import { motion } from "motion/react";

export default function MotionBasic() {
  return (
    <>
      <div>
        <motion.img
          src="/image/logo.jpg"
          alt="WINGS Project"
          initial={{ x: "100vw" }}
          animate={{ x: "20vw" }}
          transition={{ duration: 2 }}
        />
      </div>
      <div>
        <motion.button
          initial={{ scale: 1, backgroundColor: "#00f" }}
          whileHover={{ scale: 1.2, backgroundColor: "#f0f" }}
          whileTap={{ scale: 0.8, backgroundColor: "#f00" }}
          transition={{ duration: 0.5 }}
          style={{ padding: "10px", color: "#fff" }}
        >
          押してみて
        </motion.button>
      </div>
    </>
  );
}
