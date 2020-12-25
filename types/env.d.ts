declare namespace NodeJS {
  export interface ProcessEnv {
    APP_NAME: string;

    SERVER_HOST: string;
    SERVER_PORT: string;

    MONGO_HOST: string;
    MONGO_PORT: string;
    MONGO_DIR: string;
  }
}
