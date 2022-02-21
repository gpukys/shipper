import { Shipper } from "../shipper";
import { PackageSize } from "../size";

export class Letter implements PackageSize {
  constructor(private shipper: Shipper) {}

  getPrice(weight: number) {
    return this.shipper.getLetterCost(weight);
  }
} 