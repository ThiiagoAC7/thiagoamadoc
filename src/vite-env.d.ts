/// <reference types="vite/client" />

declare module "*.mdx" {
  import type { ComponentType, ReactNode } from "react";

  export type MDXComponents = Record<string, ComponentType<Record<string, unknown>> | string>;

  export type MDXProps = {
    components?: MDXComponents;
    children?: ReactNode;
  };

  const MDXContent: ComponentType<MDXProps>;
  export default MDXContent;
}
