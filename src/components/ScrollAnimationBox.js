import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const ScrollAnimationBox = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.8, once: true }); // 60% visible
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
          delay,
        },
      });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationBox;
