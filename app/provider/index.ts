import AppServiceProvider from "./App";
import RouteServiceProvider from "./Route";
import SocketServiceProvier from "./Socket";

namespace ServiceProvider {
  export interface Template {
    register(): void;
  }

  /**
   * Register Your Service Here!
   *
   */
  export const Dotenv = AppServiceProvider;
  export const Route = RouteServiceProvider;
  export const Socket = SocketServiceProvier;
}

export default ServiceProvider;
