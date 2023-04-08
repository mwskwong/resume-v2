import { FC, SVGProps } from "react";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_URL: string;
      NEXT_PUBLIC_FORMSPREE_FORM_ID: string;
      ANALYZE_BUNDLE: "true" | "false";
      VERCEL_ENV: "preview" | "production" | "development";
      CF_SPACE_ID: string;
      CF_DELIVERY_ACCESS_TOKEN: string;
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

  module "*.svg?url" {
    const url: string;
    export default url;
  }
}
