declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.gif" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}

declare interface NodeRequire {
  context: (
    directory: string,
    useSubdirectories: boolean,
    regExp: RegExp,
  ) => {
    keys: () => string[];
    (id: string): unknown;
  };
}

declare const require: NodeRequire;
// src/images.d.ts
declare module "*.svg?react" {
  import React from "react";
  const ReactComponent: React.FC<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  export default ReactComponent;
}

// Also helpful for standard image imports
declare module "*.svg" {
  const content: string;
  export default content;
}

// Standard CSS side-effect imports (fixes TS2882)
declare module "*.css" {
  const content: unknown;
  export default content;
}

// Keep your existing CSS Module declaration
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
