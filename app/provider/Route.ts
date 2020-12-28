import ServiceProvider from ".";
import { Request, Response, Express, default as Server } from "express";

export default class Route implements ServiceProvider.Template {
  private server: Express;
  private port: Number;
  private host: String;

  get address(): String {
    return `${this.host}:${this.port}`;
  }

  constructor() {
    this.server = Server();
    this.host = process.env.SERVER_HOST || "localhost";
    this.port = Number(process.env.SERVER_PORT || 8000);
  }

  register(): void {
    this.server.get("/", (req: Request, res: Response) => {
      res.send("Hi There");
    });

    this.listen();
  }

  private listen(): void {
    this.server.listen(this.port, () => {
      console.log(`⚡️ [info]: Server is running at http://${this.address}`);
    });
  }
}
