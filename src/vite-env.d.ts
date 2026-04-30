/// <reference types="vite/client" />

declare module "*.css";
declare module "*.scss";
declare module "*.sass";

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}
declare module "*.svg" {
  const src: string;
  export default src;
}
