declare module "map-keys-deep-lodash" {
  import { LoDashStatic } from "@types/lodash";

  const func: LoDashStatic["mapKeys"];
  export default func;
}