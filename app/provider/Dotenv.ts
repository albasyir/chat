import dotenv from "dotenv";

export default class Dotenv {
  register(): void {
    dotenv.config();
  }
}
