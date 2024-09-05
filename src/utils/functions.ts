// utils/animationUtils.ts
export const getAnimationDelay = (index: number): string => {
  const delayInMs = 400 * index; // Adjust the multiplier for your desired delay
  return `${delayInMs}ms`;
};

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
