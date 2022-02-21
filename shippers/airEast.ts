import { Shipper } from "../shipper";

export class AirEastShipper implements Shipper {
  getLetterCost(weight: number) {
    return .39 * weight;
  }
  getPackageCost(weight: number) {
    return .25 * weight;
  }
  getOversizedCost(weight: number) {
    return 10 + this.getPackageCost(weight);
  }
}