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
}

export {};
