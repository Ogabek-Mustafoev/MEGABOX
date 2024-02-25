export const tabVariant = {
  active: {
    width: '55%',
    transition: {
      type: 'tween',
      duration: 0.4,
    },
  },
  inactive: {
    width: '15%',
    transition: {
      type: 'tween',
      duration: 0.4,
    },
  },
};

export const tabTextVariant = {
  active: {
    opacity: 1,
    x: 0,
    display: 'block',
    transition: {
      type: 'tween',
      duration: 0.3,
      delay: 0.3,
    },
  },
  inactive: {
    opacity: 0,
    x: -30,
    transition: {
      type: 'tween',
      duration: 0.3,
      delay: 0.1,
    },
    transitionEnd: { display: 'none' },
  },
};
