import { FC, SVGProps } from "react";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_URL: string;
      NEXT_PUBLIC_FORMSPREE_FORM_ID: string;
      ANALYZE_BUNDLE: 1 | 0;
      VERCEL_ENV: "preview" | "production" | "development";
    }
  }

  module "*.pdf" {
    const content: string;
    export default content;
  }

  module "*.svg" {
    const ReactComponent: FC<SVGProps<SVGSVGElement>>;
    export default ReactComponent;
  }
}
