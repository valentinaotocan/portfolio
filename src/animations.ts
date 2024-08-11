export const fromOpacity = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      cubicBezier: [0.46,0.03,0.52,0.96],
    },
  },
}

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
      ease: [0.46, 0.03, 0.52, 0.96],
      delay: 0.3,
    },
  },
};

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
      ease: [0.46, 0.03, 0.52, 0.96],
    },
  },
  out: {
    opacity: 0,
    y: "100vh",
    transition: {
      duration: 0.6,
      ease: [0.46, 0.03, 0.52, 0.96],
    },
  },
};

