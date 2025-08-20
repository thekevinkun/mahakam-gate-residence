export const slideContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const slideIn = (direction = "up", duration = 0.6, delay = 0) => {
  let x = 0;
  let y = 0;

  switch (direction) {
    case "left":
      x = -100;
      break;
    case "right":
      x = 100;
      break;
    case "up":
      y = 100;
      break;
    case "down":
      y = -100;
      break;
    default:
      break;
  }

  return {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  };
};

export const fadeIn = (duration = 0.6, delay = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration, delay, ease: "easeOut" },
  },
});

export const scaleIn = (duration = 0.6, delay = 0) => ({
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration, delay, ease: "easeInOut" },
  },
});
