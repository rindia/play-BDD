

export declare global {
    namespace NodeJS {
        interface ProcessEnv {
            BROWSER?: 'chrome' | 'firefox' | 'webkit' | "edge",
            ENV: "QA" | "prod" | "stage" | "test",
            URL: string
        }
    }
}