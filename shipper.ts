export interface Shipper {
  getLetterCost(weight: number): number
  getPackageCost(weight: number): number
  getOversizedCost(weight: number): number
}