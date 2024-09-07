import React from "react";
import { CUSINES } from "../constants";
import { motion, stagger } from "framer-motion";

const containerVarients = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const ItemVarients = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

function Experties() {
  return (
    <section id="experties">
      <h2 className="m-y-8 text-center text-3xl tracking-tighter lh:text-4xl ">
        Our Experties
      </h2>
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="show"
        variants={containerVarients}
      >
        {CUSINES.map((cusine, index) => (
          <motion.div
            variants={ItemVarients}
            className="flex items-center border-b-4 bg-neutral-700/40 border-dotted py-2"
            key={index}
          >
            <div className="flex-shrink-0 pr-8 text-2xl ">{cusine.number}</div>
            <div className="w-1/3 flex-shrink-0 ">
              <img
                src={cusine.image}
                alt={cusine.title}
                className="h-auto rounded-3xl"
              />
            </div>
            <div className="pl-8">
              <h3 className="text-2xl uppercase tracking-tighter text-rose-300">
                {cusine.title}
              </h3>
              <p className="mt-4 text-lg tracking-tighter ">
                {cusine.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Experties;
