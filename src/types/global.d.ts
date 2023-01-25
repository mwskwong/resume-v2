import { FC, SVGProps } from "react";

declare global {
  declare namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_URL: string
      NEXT_PUBLIC_FORM: string
      ANALYZE_BUNDLE: 1 | 0
      VERCEL_ENV: "preview" | "production" | "development"
    }
  }

  declare module "*.pdf" {
    const content: string;

    export default content;
  }

  declare module "*.svg" {
    const ReactComponent: FC<SVGProps<SVGSVGElement>>;

    export default ReactComponent;
  }
}
