import { motion } from "motion/react";

interface HeroProps {
  intro: string;
  photoUrl: string;
  photoAlt: string;
}

const containerVariants = {
  hidden: {},
  visible: (i = 0) => ({
    transition: { staggerChildren: 0.18, delayChildren: i * 0.1 },
  }),
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 16 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring" as const, stiffness: 120, damping: 15 },
  },
};

export default function Hero({ intro, photoUrl, photoAlt }: HeroProps) {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-white dark:bg-teal-950 transition-colors duration-300">
      <div className="max-w-6xl m-auto px-6 py-10 pt-36 md:pt-40 flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10 md:gap-20">
        <motion.div
          className="w-full md:flex-1 flex flex-col gap-8 md:gap-9"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-oxygen-mono tracking-tighter dark:text-white transition-colors duration-300">
            <motion.span
              className="inline-block" aria-hidden="true"
              variants={wordVariants}
            >
              Hi,
            </motion.span>{" "}
            <motion.span
              className="inline-block" aria-hidden="true"
              variants={wordVariants}
            >
              I'm
            </motion.span>{" "}
            <motion.span
              variants={wordVariants}
              className="inline-block text-lime-400"
              aria-hidden="true"
            >
              Laura.
            </motion.span>
          </h1>
          <h2 className="text-2xl lg:text-3xl font-oxygen-mono tracking-tighter dark:text-white transition-colors duration-300" aria-label="Hi, I'm Laura.">
            <motion.span variants={wordVariants} className="inline-block" aria-hidden="true">
              Software
            </motion.span>{" "}
            <motion.span variants={wordVariants} className="inline-block" aria-hidden="true">
              Engineering
            </motion.span>{" "}
            <motion.span
              variants={wordVariants}
              className="inline-block dark:text-white"
              aria-hidden="true"
              transition={{ delay: 0.9, duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              Manager
            </motion.span>
          </h2>
          <motion.hr variants={wordVariants} className="border-t-4 border-lime-400 border-dashed"></motion.hr>
          <motion.div variants={itemVariants} className="leading-7">
            <p>{intro}</p>
          </motion.div>
        </motion.div>
        <motion.div
          className="avatar w-auto relative rounded-full"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
          transition={{
            opacity: { duration: 0.7 },
            scale: { type: "spring", stiffness: 120, damping: 14 },
            y: { delay: 1, duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <img src={photoUrl} alt={photoAlt} className="max-w-[200px] md:max-w-[300px] lg:max-w-[350px] m-auto rounded-full relative z-2" />
        </motion.div>
      </div>
    </section>
  );
}
