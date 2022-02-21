import { Shipper } from "../shipper";
import { PackageSize } from "../size";

export class Oversize implements PackageSize {
  constructor(private shipper: Shipper) {}

  getPrice(weight: number) {
    return this.shipper.getOversizedCost(weight);
  }
} 