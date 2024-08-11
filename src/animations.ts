const commonEase = [0.46, 0.03, 0.52, 0.96];

export const pageVariants = {
  initial: {
    opacity: 0,
    y: "-100vh",
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: commonEase,
    },
  },
  out: {
    opacity: 0,
    y: "100vh",
    transition: {
      duration: 0.6,
      ease: commonEase,
    },
  },
};

export const fromOpacity = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      cubicBezier: commonEase,
    },
  },
};

export const fromTop = {
  hidden: {
    opacity: 0,
    y: "-100%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: commonEase,
      delay: 0.3,
    },
  },
};



