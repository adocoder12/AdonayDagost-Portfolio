// utils/animationUtils.ts
export const getAnimationDelay = (index: number): string => {
  const delayInMs = 400 * index; // Adjust the multiplier for your desired delay
  return `${delayInMs}ms`;
};
