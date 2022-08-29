// Define process.env
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_URL: string
    readonly ANALYZE_BUNDLE: 1 | 0
  }
}