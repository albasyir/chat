import Providers from "../app/provider";

for (let ServiceObject of Object.values(Providers)) {
  let Service: Providers.Template = new ServiceObject();
  Service.register();
}
