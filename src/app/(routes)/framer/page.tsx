"use client";

import { motion } from "framer-motion";

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
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            className="size-14 shadow-md rounded-full bg-background"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            className="size-14 shadow-md rounded-full bg-background"
          ></motion.div>
        </motion.div>
        <motion.div
          variants={dissolve}
          className="bg-foreground bg-opacity-50 aspect-square rounded-lg justify-center flex items-center gap-10 size-64"
        ></motion.div>
        <motion.div
          variants={dissolve}
          className="bg-foreground bg-opacity-50 aspect-square rounded-lg justify-center flex items-center gap-10 size-64"
        ></motion.div>
        <motion.div
          variants={dissolve}
          className="bg-foreground bg-opacity-50 aspect-square rounded-lg justify-center flex items-center gap-10 size-64"
        ></motion.div>
        <motion.div
          variants={dissolve}
          className="bg-foreground bg-opacity-50 aspect-square rounded-lg justify-center flex items-center gap-10 size-64"
        ></motion.div>
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
