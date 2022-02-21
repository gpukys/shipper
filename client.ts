import { MockGui } from "./mockgui";
import { Shipment } from "./shipment";

class Client {
  public shipment: Shipment;

  constructor(
    public gui: MockGui
  ) {
    this.shipment = new Shipment(gui.getState())
  }

  onShip(): string {
    const res = this.shipment.ship();
    console.log(`received - ${res}`);
    return res;
  }
}