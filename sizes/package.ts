import { Shipper } from "../shipper";
import { PackageSize } from "../size";

export class Package implements PackageSize {
  constructor(private shipper: Shipper) {}

  getPrice(weight: number) {
    return this.shipper.getPackageCost(weight);
  }
} 