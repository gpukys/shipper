import { Shipper } from "./shipper";
import { AirEastShipper } from "./shippers/airEast";
import { ChicagoSprintShipper } from "./shippers/chicagoSprint";
import { PacificParcelShipper } from "./shippers/pacificParcel";
import { PackageSize } from "./size";
import { Letter } from "./sizes/letter";
import { Oversize } from "./sizes/oversize";
import { Package } from "./sizes/package";

let shipmentId = 0;

export interface State {
  shipmentId: number,
  toAddress: string,
  fromAddress: string,
  toZipCode: string,
  fromZipCode: string,
  weight: number,
  marks: string[]
}

export class Shipment {

  private cost: number = 0;
  private shipper: Shipper;
  private packageSize: PackageSize;

  constructor(
    private state: State
  ) {
    if (!state.shipmentId) {
      this.state.shipmentId = this.getShipmentId();
    }
    this.shipper = this.getShipper(state.fromZipCode);
    this.packageSize = this.getPackageSize(state.weight, this.shipper);
    this.setCost(this.packageSize.getPrice(state.weight))
  }

  private getShipmentId(): number {
    return ++shipmentId;
  }

  private getShipper(fromZipCode: string): Shipper {
    switch (fromZipCode.charAt(0)) {
      case '1':
      case '2':
      case '3':
        return new AirEastShipper()
      case '4':
      case '5':
      case '6':
        return new ChicagoSprintShipper()
      case '7':
      case '8':
      case '9':
        return new PacificParcelShipper();
      default:
        return new AirEastShipper();
    }
  }

  private getPackageSize(weight: number, shipper: Shipper): PackageSize {
    if (weight <= 15) {
      return new Letter(shipper);
    }
    if (weight <= 160) {
      return new Package(shipper);
    }
    return new Oversize(shipper)
  }

  public setCost(cost: number) {
    return this.cost = cost;
  }

  public getCost(): number {
    return +(this.cost).toFixed(2);
  }

  public ship(): string {
    const {shipmentId, fromAddress, toAddress} = this.state
    return `${shipmentId}${fromAddress}${toAddress}${this.getCost()}`
  }
  
}