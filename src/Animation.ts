
export const fromOpacity = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      cubicBezier: [0.46,0.03,0.52,0.96],
    },
  },
}

export const fromTop = {
  hidden: {
    opacity: 0,
    y: '-30%',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      cubicBezier: [0.46, 0.03, 0.52, 0.96],
      delay: 0.25,
    },
  },
};

