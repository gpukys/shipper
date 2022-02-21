import { Shipper } from "../shipper";

export class PacificParcelShipper implements Shipper {
  getLetterCost(weight: number) {
    return .51 * weight;
  }
  getPackageCost(weight: number) {
    return .19 * weight;
  }
  getOversizedCost(weight: number) {
    return this.getPackageCost(160) + .21 * (weight - 160);
  }
}