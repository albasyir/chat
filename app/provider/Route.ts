import { Request, Response, Express, default as Server } from "express";

/// <reference path="index.ts" />
namespace ServiceProvider {
  export class Route implements Registration {
    private server: Express;
    private port: Number;
    private host: String;

    get address(): String {
      return `${this.host}:${this.port}`;
    }

    constructor() {
      this.server = Server();
      this.host = process.env.SERVER_HOST;
      this.port = Number(process.env.SERVER_PORT);
    }

    register(): void {
      this.server.get("/", (req: Request, res: Response) => {
        res.send("Hi There");
      });
    }

    private listen(): void {
      this.server.listen(this.port, () => {
        console.log(`⚡️ [info]: Server is running at http://${this.address}`);
      });
    }
  }
}
