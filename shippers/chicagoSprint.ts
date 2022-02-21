import { Shipper } from "../shipper";

export class ChicagoSprintShipper implements Shipper {
  getLetterCost(weight: number) {
    return .42 * weight;
  }
  getPackageCost(weight: number) {
    return .20 * weight;
  }
  getOversizedCost(weight: number) {
    return this.getPackageCost(weight);
  }
}