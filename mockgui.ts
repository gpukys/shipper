import { Shipment, State } from "./shipment";



export class MockGui {
  on(eventType: string, callback: (state: Shipment) => void) {}
  trigger(eventType: string, state: Shipment) {}
  getState(): State {
    return {
      shipmentId: 0,
      fromAddress: 'Southside Ave. 25-34',
      toAddress: 'Testing str. 11-12',
      fromZipCode: '12345',
      toZipCode: '54321',
      weight: 12.33,
      marks: []
    }
  }
}