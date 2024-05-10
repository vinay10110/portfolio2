import "../App.css";
import { motion } from "framer-motion";
import profile from '../assets/profile-pic.png'
const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0},
        opacity: { delay, duration: 1.0 }
      }
    };
  }
};

export default function Lines() {
  return (
    <div style={{ position: "relative", width: "600px", height: "600px" }}>
      <motion.svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        initial="hidden"
        animate="visible"
      >
      <motion.circle
        cx="300"
        cy="300"
        r="125"
        stroke="#111"
        variants={draw}
        
        custom={1}
       
      />
        
       
      </motion.svg>
      <img
        src={profile}
        alt="Description of the image"
        style={{
          position: "absolute",
          top: 180,
          left: 180,
          width: "40%",
          height: "40%"

        }}
      />
    </div>
  );
}
