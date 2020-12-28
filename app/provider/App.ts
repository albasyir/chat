import ServiceProvider from ".";
import dotenv from "dotenv";

export default class App implements ServiceProvider.Template {
  register(): void {
    dotenv.config();
  }
}
