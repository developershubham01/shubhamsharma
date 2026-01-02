import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg border border-white/20"
        >
          <ArrowUp size={22} />
        </motion.button>
      )}
    </>
  );
};

export default ScrollToTop;
