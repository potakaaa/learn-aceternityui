"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect } from "react";

const dissolveParent = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const dissolve = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

const page = () => {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);
  return (
    <div className="flex flex-col gap-10 overflow-x-hidden">
      <motion.section
        variants={dissolveParent}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 p-10 gap-5"
      >
        <motion.div
          id="square-circle"
          variants={dissolve}
          className="bg-foreground bg-opacity-50 aspect-square rounded-lg justify-center flex items-center gap-5 size-64"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.4,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 1,
            }}
            className="size-14 shadow-md rounded-lg bg-background"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.4,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 1,
            }}
            className="size-14 shadow-md rounded-full bg-background"
          ></motion.div>
        </motion.div>
        <motion.div
          id="keyframes"
          variants={dissolve}
          className="bg-foreground bg-opacity-50 aspect-square rounded-lg justify-center flex items-center gap-10 size-64"
        >
          <motion.div
            animate={{
              rotate: [0, 180, 270, 180, 90],
              scale: [1, 1.5, 2, 1.5, 1],
              borderRadius: ["20%", "50%", "20%", "50%", "20%"],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
            className="size-1/3 rounded-lg shadow-md bg-rose-500"
          ></motion.div>
        </motion.div>
        <motion.div
          id="button"
          variants={dissolve}
          className="bg-foreground bg-opacity-50 aspect-square rounded-lg justify-center flex items-center gap-10 size-64"
        >
          <motion.button
            whileTap={{ rotate: 180, backgroundColor: "#4ef542" }}
            whileHover={{ scale: 1.5, backgroundColor: "#f6e05e" }}
            className="text-background bg-amber-400 px-7 py-3 font-medium rounded-full shadow-md"
          >
            Click me!
          </motion.button>
        </motion.div>
        <motion.div
          id="draggable"
          variants={dissolve}
          className="bg-foreground bg-opacity-50 aspect-square rounded-lg justify-center flex items-center gap-10 size-64"
        >
          <motion.div
            className="bg-fuchsia-500 rounded-xl shadow-md size-1/3 cursor-grab"
            drag
            dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          ></motion.div>
        </motion.div>
        <motion.div
          variants={dissolve}
          className="bg-foreground bg-opacity-50 aspect-square rounded-lg justify-center flex items-center gap-10 size-64"
        >
          <div className="bg-teal-200 w-20 h-28 rounded-lg">
            <motion.div
              className="w-full h-full bg-teal-500 rounded-lg origin-bottom"
              style={{ scaleY: scrollYProgress }}
            ></motion.div>
          </div>
        </motion.div>
        <motion.div
          variants={dissolve}
          className="bg-foreground bg-opacity-50 aspect-square rounded-lg justify-center flex items-center gap-10 size-64"
        ></motion.div>
      </motion.section>
      <h1>Sample</h1>
    </div>
  );
};

export default page;
