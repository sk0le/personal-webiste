import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const variants = {
  initial: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      // scale: 0.5,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction: number) => {
    return {
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,

      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    };
  },
};

interface CProps {
  images: string[];
}
const Carousel = ({ images }: CProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const i = setInterval((): void => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
        return;
      }
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(i);
  }, [currentIndex, images]);

  function nextStep() {
    setDirection(1);
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
      return;
    }
    setCurrentIndex((prev) => prev + 1);
  }

  function prevStep() {
    setDirection(-1);
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
      return;
    }
    setCurrentIndex((prev) => prev - 1);
  }

  return (
    <motion.div className="relative overflow-hidden w-full h-[50vh]">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          variants={variants}
          animate="animate"
          initial="initial"
          exit="exit"
          src={images[currentIndex]}
          alt="slides"
          className="object-cover object-center absolute w-full h-full top-0 left-0 appearance-none"
          key={images[currentIndex]}
          custom={direction}
        />
      </AnimatePresence>
      <div
        className="absolute top-1/2 -translate-y-1/2 hover:scale-105 active:scale-95 transition-all cursor-pointer left-5 rounded-md px-2 py-1 bg-red-600"
        onClick={prevStep}
      >
        <FontAwesomeIcon icon={faArrowAltCircleLeft} className="text-white" />
      </div>
      <div
        className="absolute top-1/2 -translate-y-1/2 hover:scale-105 active:scale-95 transition-all cursor-pointer right-5 rounded-md px-2 py-1 bg-red-600"
        onClick={nextStep}
      >
        <FontAwesomeIcon icon={faArrowAltCircleRight} className="text-white" />
      </div>
    </motion.div>
  );
};

export default Carousel;
